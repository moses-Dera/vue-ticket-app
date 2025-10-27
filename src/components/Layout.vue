<template>
  <div>
    <header class="bg-white shadow-sm sticky top-0 z-40">
      <div class="container-max px-6 py-4 flex items-center justify-between">
        <div class="flex items-center gap-4">
          <router-link to="/" class="text-2xl font-extrabold text-indigo-600">TicketApp</router-link>
          <nav class="hidden md:flex gap-4 text-sm text-gray-600">
            <router-link to="/">Home</router-link>
            <router-link to="/dashboard">Dashboard</router-link>
            <router-link to="/tickets">Tickets</router-link>
          </nav>
        </div>
        <div class="flex items-center gap-3">
          <template v-if="!auth.token">
            <button @click="$router.push('/auth/login')" class="text-sm">Login</button>
            <router-link to="/auth/signup" class="bg-indigo-600 text-white px-3 py-1 rounded-lg text-sm">Get Started</router-link>
          </template>
          <template v-else>
            <button class="text-sm" @click="$router.push('/dashboard')">Dashboard</button>
            <button class="bg-red-50 text-red-700 px-3 py-1 rounded-lg text-sm" @click="auth.logout()">Logout</button>
          </template>
        </div>
      </div>
    </header>

    <main class="container-max px-6 py-6">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import { useAuthStore } from "../stores/auth";
export default {
  components: { Footer },
  setup(){ return { auth: useAuthStore() }; }
};
</script>
