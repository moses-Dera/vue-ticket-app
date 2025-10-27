<template>
  <section class="py-12">
    <div class="max-w-6xl mx-auto space-y-6">
      <div class="flex items-center justify-between">
        <h2 class="text-2xl font-bold">Ticket Management</h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="lg:col-span-1">
          <h3 class="font-semibold mb-3">{{ editing ? "Edit Ticket" : "Create Ticket" }}</h3>
          <TicketForm :editingTicket="editing" @saved="onSaved" />
        </div>

        <div class="lg:col-span-2 space-y-4">
          <div v-if="loading">Loading...</div>
          <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-if="tickets.length === 0" class="text-gray-500">No tickets yet.</div>
            <TicketCard v-for="t in tickets" :key="t.id" :ticket="t" @edit="setEditing" @delete="confirmDelete" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from "vue";
import { getTickets, deleteTicket } from "../../services/ticketService";
import TicketCard from "./TicketCard.vue";
import TicketForm from "./TicketForm.vue";

export default {
  components: { TicketCard, TicketForm },
  setup(){
    const tickets = ref([]);
    const loading = ref(true);
    const editing = ref(null);
    const load = async ()=>{
      loading.value = true;
      try { tickets.value = await getTickets(); } 
      catch (e) { window.__toast?.push({ type:"error", title: "Failed to load tickets. Please retry." }); }
      finally { loading.value = false; }
    };
    onMounted(load);
    function onSaved() { editing.value = null; load(); }
    function setEditing(t) { editing.value = t; window.scrollTo({ top: 0, behavior: "smooth" }); }
    async function confirmDelete(t) {
      if (!confirm("Are you sure you want to delete this ticket?")) return;
      try { await deleteTicket(t.id); window.__toast?.push({ type:"success", title:"Ticket deleted" }); load(); }
      catch { window.__toast?.push({ type:"error", title:"Failed to delete ticket." }); }
    }
    return { tickets, loading, editing, onSaved, setEditing, confirmDelete };
  }
};
</script>
