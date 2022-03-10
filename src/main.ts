import { createPinia } from "pinia";
import { createApp } from "vue";
import { User } from "./@types";
import App from "./App.vue";
import "./assets/base.css";
import router from "./router";
import { useAuthStore } from "./stores/auth";
import { useSettingsStore } from "./stores/settings";

const app = createApp(App);

app.use(createPinia());
app.use(router);

if (window.localStorage) {
  const authStore = useAuthStore();
  const settingsStore = useSettingsStore();
  const localUserJson = window.localStorage.getItem("user") || "null";
  const localUser: User = JSON.parse(localUserJson);

  if (localUser && authStore.user?.stamp !== localUser.stamp) {
    authStore.user = localUser;
    authStore.token = window.localStorage.getItem("token") || undefined;
  }

  if (!window.localStorage.getItem("darkMode")) {
    settingsStore.darkMode = window.matchMedia("(prefers-color-scheme: dark").matches;
  } else {
    settingsStore.darkMode = window.localStorage.getItem("darkMode") == "true";
  }
}

app.mount("#app");
