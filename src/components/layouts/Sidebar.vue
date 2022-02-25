<template>
  <nav class="relative h-full w-72 border-r-2 border-slate-100 bg-white px-10 text-slate-700 dark:border-[#2C2C2C] dark:bg-[#333434]">
    <div class="mt-12">
      <router-link to="/" class="h-9 text-3xl tracking-[0.25em] text-black transition duration-200 hover:text-red-400 active:text-red-500 dark:text-white">todo</router-link>
    </div>
    <div class="mt-14 flex flex-col gap-4">
      <router-link :to="{ name: routeNames.tasks }" class="flex h-12 items-center gap-4 text-lg transition duration-300 hover:text-purple-300 dark:text-[#DBDBDB] dark:hover:text-blue-300">
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
        <span>Tasks</span>
      </router-link>
      <router-link :to="{ name: routeNames.categories }" class="flex h-12 items-center gap-4 text-lg transition duration-300 hover:text-purple-300 dark:text-[#DBDBDB] dark:hover:text-blue-300">
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
        <span>Categories</span>
      </router-link>
    </div>
    <div class="absolute bottom-0 mb-14 flex flex-col gap-4">
      <router-link :to="{ name: routeNames.settings }" class="flex h-12 items-center gap-4 text-lg transition duration-300 hover:text-purple-300 dark:text-[#DBDBDB] dark:hover:text-blue-300">
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span>Settings</span>
      </router-link>
      <button class="flex h-12 items-center gap-4 text-lg transition duration-300 hover:text-purple-300 dark:text-[#DBDBDB] dark:hover:text-blue-300" @click.prevent="logout()">
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
        <span>Logout</span>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { routeNames } from "@/router/routes";
import { useAuthStore } from "@/stores/auth";
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
  @apply text-blue-400 dark:text-blue-400;
}
</style>
