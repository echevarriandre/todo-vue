<template>
  <div class="flex h-full w-full bg-slate-50 dark:bg-[#38393a]">
    <Sidebar />
    <div class="mx-20 flex w-full flex-col text-slate-700">
      <Header />

      <section class="mt-14 w-full">
        <slot />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "./Header.vue";
import Sidebar from "./Sidebar.vue";
</script>
