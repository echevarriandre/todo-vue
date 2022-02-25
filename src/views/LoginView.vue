<template>
  <div class="flex h-full w-full flex-col items-center justify-center bg-white bg-gradient-to-tr from-red-400 to-pink-500">
    <div class="relative w-80 rounded-3xl bg-white p-10 shadow-xl md:w-96">
      <h1 class="flex items-center justify-between text-center">
        <span class="text-5xl tracking-wider text-black">todo</span>
        <button class="transition duration-200 hover:text-yellow-400 active:text-yellow-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          class="w-full rounded-lg bg-black px-12 py-2 text-white ring-inset transition duration-200 hover:bg-white hover:text-black hover:ring-2 hover:ring-black disabled:bg-white disabled:text-black disabled:ring-2 disabled:ring-black"
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
import { routeNames } from "@/router/routes";
import { useAuthStore } from "@/stores/auth";
import { ref } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import TInput from "../components/tailwind/t-input.vue";

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
