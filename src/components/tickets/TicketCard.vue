<template>
  <div class="bg-white rounded-2xl shadow p-4 border">
    <div class="flex items-start justify-between gap-3">
      <div>
        <h3 class="font-semibold">{{ ticket.title }}</h3>
        <p class="text-sm text-gray-500 mt-1">{{ ticket.description }}</p>
        <div class="mt-3 flex items-center gap-3">
          <span :class="statusClass" class="px-3 py-1 rounded-full text-xs font-medium border">
            {{ ticket.status.replace('_',' ') }}
          </span>
          <span v-if="ticket.priority" class="text-xs text-gray-500">Priority: {{ ticket.priority }}</span>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <button @click="$emit('edit', ticket)" class="text-sm text-indigo-600">Edit</button>
        <button @click="$emit('delete', ticket)" class="text-sm text-red-600">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { ticket: { type: Object, required: true } },
  computed: {
    statusClass() {
      return {
        open: "text-emerald-700 bg-emerald-50 border-emerald-100",
        in_progress: "text-amber-700 bg-amber-50 border-amber-100",
        closed: "text-gray-700 bg-gray-50 border-gray-100"
      }[this.ticket.status];
    }
  }
};
</script>

