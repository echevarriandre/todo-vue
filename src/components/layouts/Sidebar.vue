<template>
  <nav class="relative h-full w-72 border-r-2 border-slate-100 bg-white px-10 text-slate-700 dark:border-0 dark:bg-slate-800">
    <div class="mt-12">
      <router-link to="/" class="h-9 text-3xl tracking-[0.25em] text-black transition duration-200 hover:text-red-400 active:text-red-500 dark:text-white">todo</router-link>
    </div>
    <div class="mt-14 flex flex-col gap-4">
      <router-link :to="{ name: routeNames.tasks }" class="flex h-12 items-center gap-4 text-lg transition duration-300 hover:text-sky-400 dark:text-slate-200 dark:hover:text-sky-400">
        <clipboard-list-icon class="h-6 w-6" />
        <span>Tasks</span>
      </router-link>
      <router-link :to="{ name: routeNames.categories }" class="flex h-12 items-center gap-4 text-lg transition duration-300 hover:text-sky-400 dark:text-slate-200 dark:hover:text-sky-400">
        <collection-icon class="h-6 w-6" />
        <span>Categories</span>
      </router-link>
    </div>
    <div class="absolute bottom-0 mb-14 flex flex-col gap-4">
      <router-link :to="{ name: routeNames.settings }" class="flex h-12 items-center gap-4 text-lg transition duration-300 hover:text-sky-400 dark:text-slate-200 dark:hover:text-sky-400">
        <cog-icon class="h-6 w-6" />
        <span>Settings</span>
      </router-link>
      <button class="flex h-12 items-center gap-4 text-lg transition duration-300 hover:text-sky-400 dark:text-slate-200 dark:hover:text-sky-400" @click.prevent="logout()">
        <logout-icon class="h-6 w-6" />
        <span>Logout</span>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { routeNames } from "@/router/routes";
import { useAuthStore } from "@/stores/auth";
import { ClipboardListIcon, CogIcon, CollectionIcon, LogoutIcon } from "@heroicons/vue/outline";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

function logout(): void {
  router.push({ name: routeNames.login });
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  authStore.logout();
}
</script>

<style scoped lang="postcss">
.router-link-active {
  @apply text-sky-400 dark:text-sky-400;
}
</style>
