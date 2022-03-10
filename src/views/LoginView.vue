<template>
  <div class="flex h-full w-full flex-col items-center justify-center bg-white bg-gradient-to-tr from-red-400 to-pink-500">
    <div class="relative w-80 rounded-3xl bg-white p-10 shadow-xl md:w-96">
      <h1 class="text-5xl tracking-wider text-black">todo</h1>
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
