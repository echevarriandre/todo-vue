<template>
  <!-- Non-mobile Header -->
  <header class="mt-12 hidden h-9 w-full justify-between md:flex">
    <div class="flex items-center gap-2 text-slate-500 focus-within:text-purple-400 dark:text-neutral-300">
      <label for="search-input" class="cursor-text">
        <SearchIcon class="h-6 w-6 transition duration-300" />
      </label>
      <input
        id="search-input"
        v-model="search"
        class="rounded-lg border-2 border-transparent bg-transparent px-4 py-1 transition duration-300 placeholder:text-slate-500 hover:border-slate-200 hover:bg-white focus:border-purple-400 focus:bg-white dark:text-neutral-300 placeholder:dark:text-neutral-300 dark:hover:border-neutral-800 dark:hover:bg-neutral-900 dark:focus:border-neutral-800 dark:focus:bg-neutral-900"
        type="text"
        name="global-search"
        placeholder="Search"
      />
    </div>
    <div class="flex cursor-default items-center gap-14 dark:text-neutral-100">
      <span>{{ username }}</span>
      <button class="transition duration-200" @click.prevent="toggleDarkMode">
        <SunIcon v-if="!settingsStore.darkMode" class="h-7 w-7 text-yellow-500 transition duration-200 hover:text-yellow-400" />
        <MoonIcon v-else class="h-6 w-6 transition duration-200 hover:text-purple-400" />
      </button>
    </div>
  </header>
  <!-- Mobile Header -->
  <header class="mt-8 flex h-9 w-full justify-between md:hidden">
    <div class="flex cursor-default items-center gap-4 dark:text-neutral-100">
      <button class="transition duration-200" @click.prevent="toggleDarkMode">
        <SunIcon v-if="!settingsStore.darkMode" class="h-7 w-7 text-yellow-500 transition duration-200 hover:text-yellow-400" />
        <MoonIcon v-else class="h-6 w-6 transition duration-200 hover:text-purple-400" />
      </button>
      <span>{{ username }}</span>
    </div>
    <button>
      <MenuIcon class="h-6 w-6 dark:text-neutral-100" />
    </button>
  </header>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";
import { useSettingsStore } from "@/stores/settings";
import { MenuIcon, MoonIcon, SearchIcon, SunIcon } from "@heroicons/vue/outline";
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
