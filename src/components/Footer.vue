<template>
  <footer class="mt-16 border-t bg-white">
    <div class="container-max px-6 py-8 text-center text-sm text-gray-500">
      © {{ year }} TicketApp • Built for Frontend Stage 2
    </div>
  </footer>
</template>
<script>
export default { data(){ return { year: new Date().getFullYear() }; } };
</script>
