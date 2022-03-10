<template>
  <div class="flex h-fit-content max-h-64 w-64 flex-col overflow-hidden rounded-3xl bg-white p-4 shadow-sm dark:bg-slate-800">
    <header class="mb-2 flex justify-between text-black">
      <div class="flex gap-2">
        <input v-model="checked" type="checkbox" />
        <span :style="{ color: color }" class="font-bold" :class="{ 'text-slate-300 line-through': checked }">{{ title }}</span>
      </div>
      <div class="flex items-center gap-2">
        <button v-if="!checked" class="text-slate-40 text-slate-500 hover:text-sky-400 dark:text-white" @click.prevent="edit">
          <pencil-icon class="h-4 w-4" />
        </button>
        <button v-else class="text-red-400 transition-all duration-300 hover:text-red-300" @click.prevent="deleteTask">
          <trash-icon class="h-4 w-4" />
        </button>
      </div>
    </header>
    <article class="overflow-auto text-justify" :class="{ 'text-slate-300 line-through dark:text-slate-500': checked, 'text-slate-500 dark:text-slate-200': !checked }">
      {{ text }}
    </article>
  </div>
</template>

<script setup lang="ts">
import { PencilIcon, TrashIcon } from "@heroicons/vue/solid";
import { ref } from "@vue/runtime-core";

const props = defineProps({
  category: { type: String, default: "" },
  title: { type: String, required: true },
  text: { type: String, required: true },
  color: { type: String, required: true },
  complete: { type: Boolean, default: false },
});

const checked = ref(props.complete);

function edit(): void {
  alert("TODO");
}

function deleteTask(): void {
  alert("TODO");
}
</script>
