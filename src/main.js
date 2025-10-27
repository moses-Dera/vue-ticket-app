import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./style.css";
import ToastProvider from "./components/ToastProvider.vue";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.component("ToastProvider", ToastProvider);
app.mount("#app");
