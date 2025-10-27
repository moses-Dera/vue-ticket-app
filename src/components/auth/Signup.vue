<template>
  <section class="py-16">
    <div class="max-w-md mx-auto bg-white p-8 rounded-2xl shadow">
      <h2 class="text-2xl font-semibold mb-4">Login</h2>
      <form @submit.prevent="handle" class="flex flex-col gap-3" novalidate>
        <div>
          <input v-model="form.email" placeholder="Email" type="email" class="w-full p-3 rounded-lg border" />
          <div v-if="errors.email" class="text-sm text-red-600 mt-1">{{ errors.email }}</div>
        </div>
        <div>
          <input v-model="form.password" placeholder="Password" type="password" class="w-full p-3 rounded-lg border" />
          <div v-if="errors.password" class="text-sm text-red-600 mt-1">{{ errors.password }}</div>
        </div>
        <button class="bg-indigo-600 text-white px-4 py-2 rounded-lg">Login</button>
      </form>
      <p class="text-sm text-gray-500 mt-4">Test user: test.user@example.com / Password123!</p>
    </div>
  </section>
</template>

<script>
import { reactive } from "vue";
import { useAuthStore } from "../../stores/auth";
import { useRouter, useRoute } from "vue-router";

export default {
  setup(){
    const form = reactive({ email: "", password: "" });
    const errors = reactive({});
    const auth = useAuthStore();
    const router = useRouter();
    const route = useRoute();

    if (route.query.message) window.__toast?.push({ type: "error", title: route.query.message });

    function handle(){
      errors.email = !form.email ? "Email is required." : "";
      errors.password = !form.password ? "Password is required." : "";
      if (errors.email || errors.password) return;
      const res = auth.login({ email: form.email, password: form.password });
      if (res.ok) {
        window.__toast?.push({ type: "success", title: "Logged in" });
        router.push("/dashboard");
      } else {
        window.__toast?.push({ type: "error", title: res.message || "Login failed" });
      }
    }
    return { form, errors, handle };
  }
};
</script>
