<template>
  <div class="flex h-fit-content max-h-64 w-64 flex-col overflow-hidden rounded-3xl bg-white p-4 shadow-sm dark:bg-[#2C2C2C]">
    <header class="mb-2 flex justify-between text-black">
      <div class="flex gap-2">
        <input v-model="checked" type="checkbox" />
        <span :style="{ color: color }" class="font-bold" :class="{ 'text-slate-300 line-through': checked }">{{ title }}</span>
      </div>
      <div class="flex items-center gap-2">
        <button v-if="!checked" class="text-slate-40 hover:text-purple-400 dark:text-white" @click.prevent="edit">
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
          </svg>
        </button>
        <button v-else class="text-red-400 transition-all duration-300 hover:text-red-300" @click.prevent="deleteTask">
          <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </header>
    <article class="overflow-auto text-justify" :class="{ 'text-slate-300 line-through dark:text-[#b1b1b1]': checked, 'text-slate-500 dark:text-[#DBDBDB]': !checked }">
      {{ text }}
    </article>
  </div>
</template>

<script setup lang="ts">
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
