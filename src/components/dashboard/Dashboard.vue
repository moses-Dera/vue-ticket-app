<template>
  <section class="py-12">
    <div class="max-w-6xl mx-auto">
      <div class="flex items-center justify-between mb-6">
        <h1 class="text-2xl font-bold">Dashboard</h1>
        <router-link to="/tickets" class="text-indigo-600">Go to Ticket Management</router-link>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="bg-white rounded-2xl shadow p-6">
          <div class="text-sm text-gray-500">Total tickets</div>
          <div class="text-2xl font-semibold">{{ loading ? "..." : stats.total }}</div>
        </div>
        <div class="bg-white rounded-2xl shadow p-6">
          <div class="text-sm text-gray-500">Open</div>
          <div class="text-2xl font-semibold text-emerald-600">{{ loading ? "..." : stats.open }}</div>
        </div>
        <div class="bg-white rounded-2xl shadow p-6">
          <div class="text-sm text-gray-500">In Progress</div>
          <div class="text-2xl font-semibold text-amber-600">{{ loading ? "..." : stats.in_progress }}</div>
        </div>
        <div class="bg-white rounded-2xl shadow p-6">
          <div class="text-sm text-gray-500">Resolved</div>
          <div class="text-2xl font-semibold text-gray-600">{{ loading ? "..." : stats.closed }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from "vue";
import { getTickets } from "../../services/ticketService";

export default {
  setup(){
    const stats = ref({ total:0, open:0, closed:0, in_progress:0 });
    const loading = ref(true);
    const load = async () => {
      loading.value = true;
      try {
        const tickets = await getTickets();
        stats.value.total = tickets.length;
        stats.value.open = tickets.filter(t => t.status === "open").length;
        stats.value.in_progress = tickets.filter(t => t.status === "in_progress").length;
        stats.value.closed = tickets.filter(t => t.status === "closed").length;
      } catch (e) {
        window.__toast?.push({ type:"error", title: "Failed to load tickets. Please retry." });
      } finally { loading.value = false; }
    };
    onMounted(load);
    return { stats, loading };
  }
};
</script>
