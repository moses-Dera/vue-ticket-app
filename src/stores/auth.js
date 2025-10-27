import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";

const STORAGE_KEY = "ticketapp_session";

export const useAuthStore = defineStore("auth", () => {
  const token = ref(localStorage.getItem(STORAGE_KEY));
  const router = useRouter();

  function persist() {
    if (token.value) localStorage.setItem(STORAGE_KEY, token.value);
    else localStorage.removeItem(STORAGE_KEY);
  }

  function login({ email, password }) {
    // Simulated auth
    if (email === "test.user@example.com" && password === "Password123!") {
      token.value = "token_" + Date.now();
      persist();
      return { ok: true };
    }
    return { ok: false, message: "Invalid credentials" };
  }

  function signup({ email, password }) {
    token.value = "token_" + Date.now();
    persist();
    return { ok: true };
  }

  function logout() {
    token.value = null;
    persist();
    router.push("/auth/login");
  }

  return { token, login, signup, logout };
});
