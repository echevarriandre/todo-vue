<template>
  <header class="flex justify-between mt-12 w-full h-9">
    <div class="flex gap-2 items-center text-gray-500 focus-within:text-purple-400">
      <label for="search-input" class="cursor-text">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </label>
      <input
        id="search-input"
        v-model="search"
        class="px-4 py-1 text-gray-500 bg-transparent hover:bg-white focus:bg-white border-2 hover:border-gray-200 focus:border-purple-400 border-transparent rounded-lg transition duration-300"
        type="text"
        name="global-search"
        placeholder="Search"
      />
    </div>
    <div class="flex gap-14 items-center cursor-default">
      <span>{{ username }}</span>
      <button class="hover:text-yellow-400 active:text-yellow-500 transition duration-200" @click.prevent="toggleDarkMode">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "@vue/runtime-core";
import { useAuthStore } from "@/stores/auth";
import { useSettingsStore } from "@/stores/settings";

const authStore = useAuthStore();
const settingsStore = useSettingsStore();
const username = authStore.user?.username;
const search = ref<string | null>(null);

function toggleDarkMode() {
  settingsStore.darkMode = !settingsStore.darkMode;
  localStorage.setItem("darkMode", settingsStore.darkMode.toString());
}
</script>
