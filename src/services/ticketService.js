const STORAGE_KEY = "ticketapp_tickets_v1";
export const VALID_STATUSES = ["open","in_progress","closed"];

function readAll() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}
function writeAll(t) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(t));
}

export function validateTicketInput(ticket){
  const errors = {};
  if (!ticket.title || ticket.title.trim().length < 3) errors.title = "Title is required (min 3 chars).";
  if (!ticket.status || !VALID_STATUSES.includes(ticket.status)) errors.status = "Status must be one of: open, in_progress, closed.";
  if (ticket.description && ticket.description.length > 2000) errors.description = "Description too long (max 2000).";
  if (ticket.priority !== undefined && ticket.priority !== null) {
    const p = Number(ticket.priority);
    if (!Number.isInteger(p) || p < 1 || p > 5) errors.priority = "Priority must be integer 1-5.";
  }
  return errors;
}

export function getTickets(){
  return new Promise(res => setTimeout(()=>res(readAll()), 200));
}
export function createTicket(ticket){
  const all = readAll();
  const now = new Date().toISOString();
  const newT = {
    id: Date.now().toString(),
    title: ticket.title.trim(),
    description: ticket.description || "",
    status: ticket.status,
    priority: ticket.priority ? Number(ticket.priority) : null,
    reporter: ticket.reporter || "test.user@example.com",
    createdAt: now,
    updatedAt: now
  };
  all.unshift(newT);
  writeAll(all);
  return Promise.resolve(newT);
}
export function updateTicket(id, changes){
  const all = readAll();
  const idx = all.findIndex(t => t.id === id);
  if (idx === -1) return Promise.reject(new Error("Ticket not found"));
  all[idx] = { ...all[idx], ...changes, updatedAt: new Date().toISOString() };
  writeAll(all);
  return Promise.resolve(all[idx]);
}
export function deleteTicket(id){
  const all = readAll();
  const filtered = all.filter(t => t.id !== id);
  writeAll(filtered);
  return Promise.resolve(true);
}
