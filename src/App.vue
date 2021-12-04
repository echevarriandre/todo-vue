<template>
  <Main v-if="authStore.isAuthenticated && route.meta.layout === 'main'">
    <router-view />
  </Main>

  <router-view v-else />
</template>

<script setup lang="ts">
import Main from "@/components/layouts/Main.vue";
import { useRoute } from "vue-router";
import { useAuthStore } from "./stores/auth";

const authStore = useAuthStore();
const route = useRoute();
</script>
