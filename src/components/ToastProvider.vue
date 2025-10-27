<template>
  <div>
    <slot />
    <div class="fixed top-6 right-6 flex flex-col gap-3 z-50">
      <div v-for="t in toasts" :key="t.id" :class="toastClass(t.type)" role="status" aria-live="polite">
        <div class="flex items-center justify-between gap-3 p-3 border rounded-lg shadow-sm max-w-xs">
          <div class="text-sm">{{ t.title }}</div>
          <button @click="remove(t.id)" class="text-sm font-medium underline">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
const state = reactive({ toasts: [] });
export default {
  name: "ToastProvider",
  setup() {
    const toasts = state.toasts;
    function push(payload) {
      const id = Date.now().toString();
      state.toasts.push({ id, ...payload });
      setTimeout(() => remove(id), 4000);
    }
    function remove(id) { state.toasts = state.toasts.filter(t => t.id !== id); }
    return { toasts, push, remove };
  },
  created() {
    // make methods available globally via window for simplicity
    window.__toast = {
      push: (p) => { const id = Date.now().toString(); this.toasts.push({ id, ...p }); setTimeout(()=>this.remove(id),4000); },
    };
  },
  methods: {
    remove(id) { this.$data.toasts = this.$data.toasts.filter(t => t.id !== id); },
    toastClass(type) {
      return type === "error" ? "bg-red-50 border-red-200 text-red-800" : "bg-green-50 border-green-200 text-green-800";
    }
  },
};
</script>
