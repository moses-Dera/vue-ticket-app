<template>
  <section class="relative overflow-hidden">
    <div class="relative bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
      <div class="container-max px-6 py-20">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">TicketApp — Reserve. Manage. Resolve.</h1>
          <p class="text-lg mb-6">A lightweight ticket management experience built across multiple frameworks. Secure, responsive, and accessible.</p>
          <div class="flex justify-center gap-4">
            <router-link to="/auth/login" class="px-5 py-3 rounded-lg bg-white text-indigo-700 font-semibold">Login</router-link>
            <router-link to="/auth/signup" class="px-5 py-3 rounded-lg border border-white/30">Get Started</router-link>
          </div>
        </div>
      </div>

      <div class="hidden md:block absolute -right-20 -top-10 w-56 h-56 rounded-full" :style="circleStyle" />

      <img src="/shared-assets/wave-hero.svg" alt="" class="w-full block" />
    </div>

    <div class="container-max px-6 mt-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="f in features" :key="f.title" class="bg-white rounded-2xl shadow-md p-6">
          <h3 class="font-semibold text-lg">{{ f.title }}</h3>
          <p class="mt-2 text-sm text-gray-600">{{ f.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){ return {
    features: [
      { title: "Create Tickets", desc: "Open new tickets with ease." },
      { title: "Track Status", desc: "Open / In progress / Closed." },
      { title: "Manage Team", desc: "Assign and resolve fast." }
    ],
    circleStyle: { background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15), rgba(255,255,255,0.03))" }
  }; }
};
</script>
