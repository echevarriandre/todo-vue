<template>
  <header class="mt-12 flex h-9 w-full justify-between">
    <div class="flex items-center gap-2 text-slate-500 focus-within:text-purple-400">
      <label for="search-input" class="cursor-text">
        <search-icon class="h-6 w-6 transition duration-300" />
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
    <div class="flex cursor-default items-center gap-14 dark:text-slate-200">
      <span>{{ username }}</span>
      <button class="transition duration-200" @click.prevent="toggleDarkMode">
        <sun-icon v-if="!settingsStore.darkMode" class="h-7 w-7 text-yellow-500 transition duration-200 hover:text-yellow-400" />
        <moon-icon v-else class="h-6 w-6 transition duration-200 hover:text-purple-400" />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";
import { useSettingsStore } from "@/stores/settings";
import { MoonIcon, SearchIcon, SunIcon } from "@heroicons/vue/outline";
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
