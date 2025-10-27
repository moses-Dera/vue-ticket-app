import { createRouter, createWebHistory } from "vue-router";
import Landing from "../components/Landing.vue";
import Login from "../components/auth/Login.vue";
import Signup from "../components/auth/Signup.vue";
import Dashboard from "../components/dashboard/Dashboard.vue";
import TicketList from "../components/tickets/TicketList.vue";
import { useAuthStore } from "../stores/auth";

const routes = [
  { path: "/", component: Landing },
  { path: "/auth/login", component: Login },
  { path: "/auth/signup", component: Signup },
  { path: "/dashboard", component: Dashboard, meta: { requiresAuth: true } },
  { path: "/tickets", component: TicketList, meta: { requiresAuth: true } },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const auth = useAuthStore();
  if (to.meta.requiresAuth && !auth.token) {
    // clear if any
    localStorage.removeItem("ticketapp_session");
    next({ path: "/auth/login", replace: true, query: { message: "Your session has expired — please log in again." }});
  } else next();
});

export default router;
