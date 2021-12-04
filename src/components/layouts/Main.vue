<template>
  <div class="flex w-full h-full bg-gray-50">
    <Sidebar />
    <div class="flex flex-col mx-20 w-full text-gray-700">
      <Header />

      <section class="mt-14 w-full">
        <slot />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from "./Sidebar.vue";
import Header from "./Header.vue";
</script>
