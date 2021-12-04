import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "./assets/base.css";
import { User } from "./@types";
import { useAuthStore } from "./stores/auth";

const app = createApp(App);

app.use(createPinia());
app.use(router);

if (window.localStorage) {
  const authStore = useAuthStore();
  const localUserJson = window.localStorage.getItem("user") || "null";
  const localUser: User = JSON.parse(localUserJson);

  if (localUser && authStore.user?.stamp !== localUser.stamp) {
    authStore.user = localUser;
    authStore.token = window.localStorage.getItem("token") || undefined;
  }
}

app.mount("#app");
