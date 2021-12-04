<template>
  <section>
    <header>
      <h1 class="text-5xl tracking-wider">Tasks</h1>
    </header>
    <div class="flex flex-wrap gap-4 mt-12">
      <task v-for="task in tasks" :key="task.title" :title="task.title" :text="task.text" :complete="task.complete" :color="task.color" />
    </div>
  </section>
</template>

<script setup lang="ts">
import Task from "@/components/Task.vue";

const exampleText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const tasks = [
  { title: "TODO 1", text: exampleText, color: "#f00", complete: false },
  { title: "TODO 2", text: exampleText.slice(0, 80), color: "#ff0", complete: false },
  { title: "TODO 3", text: exampleText.slice(0, 90), color: "#00f", complete: false },
  { title: "TODO 4", text: exampleText.slice(0, 200), color: "#f0f", complete: false },
];
</script>
