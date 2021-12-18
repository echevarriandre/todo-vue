<template>
  <div class="h-fit-content flex flex-col p-4 w-64 max-h-64 bg-white rounded-3xl shadow-sm overflow-hidden">
    <header class="flex justify-between mb-2 text-black">
      <div class="flex gap-2">
        <input v-model="checked" type="checkbox" />
        <span :style="{ color: color }" class="font-bold" :class="{ 'line-through text-slate-300': checked }">{{ title }}</span>
      </div>
      <div class="flex gap-2 items-center">
        <button v-if="checked" class="hover:text-red-300 text-red-400 transition-all duration-300" @click.prevent="deleteTask">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <button v-else class="text-slate-40 hover:text-purple-400" @click.prevent="edit">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
          </svg>
        </button>
      </div>
    </header>
    <article class="text-justify overflow-auto" :class="{ 'line-through text-slate-300': checked, 'text-slate-500': !checked }">{{ text }}</article>
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
