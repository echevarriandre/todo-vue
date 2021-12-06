<template>
  <div id="wrapper" class="w-full h-full" :class="{ dark: settingsStore.darkMode }">
    <Main v-if="authStore.isAuthenticated && route.meta.layout === 'main'">
      <router-view />
    </Main>

    <router-view v-else />
  </div>
</template>

<script setup lang="ts">
import Main from "@/components/layouts/Main.vue";
import { useRoute } from "vue-router";
import { useAuthStore } from "./stores/auth";
import { useSettingsStore } from "./stores/settings";

const authStore = useAuthStore();
const settingsStore = useSettingsStore();
const route = useRoute();
</script>
