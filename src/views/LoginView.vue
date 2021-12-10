<template>
  <div class="flex flex-col items-center justify-center w-full h-full bg-white bg-gradient-to-tr from-red-400 to-pink-500">
    <div class="relative p-10 w-80 bg-white rounded-3xl shadow-xl md:w-96">
      <h1 class="flex items-center justify-between text-center">
        <span class="text-black text-5xl tracking-wider">todo</span>
        <button class="hover:text-yellow-400 active:text-yellow-500 transition duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </button>
      </h1>
      <form class="mt-10" @keypress.enter.prevent="login">
        <div class="mb-10">
          <TInput v-model:modelValue="username" label="Username" type="text" :disabled="loading" />
          <TInput v-model:modelValue="password" label="Password" type="password" :disabled="loading" />
          <p v-show="error" class="text-red-500">{{ error }}</p>
        </div>
        <button
          class="px-12 py-2 w-full hover:text-black text-white bg-black hover:bg-white rounded-lg transition duration-200 hover:ring-2 ring-inset hover:ring-black disabled:text-black disabled:bg-white disabled:ring-2 disabled:ring-black"
          :disabled="loading"
          @click.prevent="login"
        >
          <span v-if="!loading">Login</span>
          <span v-else>Logging in...</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import TInput from "../components/tailwind/t-input.vue";
import { ref } from "@vue/runtime-core";
import { useRouter } from "vue-router";

import { useAuthStore } from "@/stores/auth";
import { routeNames } from "@/router/routes";

const router = useRouter();
const authStore = useAuthStore();

const loading = ref(false);
const username = ref("");
const password = ref("");
const error = ref<string | null>(null);

const login = async (): Promise<void> => {
  loading.value = true;
  const result = await authStore.login(username.value, password.value);

  if (result) {
    const currentUrl = new URL(window.location.href);

    const redirectUrl = currentUrl.searchParams.get("redirect");
    if (redirectUrl) {
      window.location.href = redirectUrl;
    } else {
      router.push({ name: routeNames.tasks });
    }

    return;
  }

  loading.value = false;
  error.value = "Incorrect username or password!";
};
</script>
