<template>
  <header class="mt-12 flex h-9 w-full justify-between">
    <div class="flex items-center gap-2 text-slate-500 focus-within:text-purple-400">
      <label for="search-input" class="cursor-text">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </label>
      <input
        id="search-input"
        v-model="search"
        class="rounded-lg border-2 border-transparent bg-transparent px-4 py-1 text-slate-500 transition duration-300 hover:border-slate-200 hover:bg-white focus:border-purple-400 focus:bg-white"
        type="text"
        name="global-search"
        placeholder="Search"
      />
    </div>
    <div class="flex cursor-default items-center gap-14 dark:text-[#DBDBDB]">
      <span>{{ username }}</span>
      <button class="transition duration-200" @click.prevent="toggleDarkMode">
        <svg v-if="!settingsStore.darkMode" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-yellow-500 hover:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        <svg v-else class="h-6 w-6 hover:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
        </svg>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";
import { useSettingsStore } from "@/stores/settings";
import { ref } from "@vue/runtime-core";

const authStore = useAuthStore();
const settingsStore = useSettingsStore();
const username = authStore.user?.username;
const search = ref<string | null>(null);

function toggleDarkMode() {
  settingsStore.darkMode = !settingsStore.darkMode;
  localStorage.setItem("darkMode", settingsStore.darkMode.toString());
}
</script>
