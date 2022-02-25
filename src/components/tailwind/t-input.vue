<template>
  <div class="relative mb-2 mt-6 flex flex-col">
    <input
      :id="label + '-input'"
      v-model="value"
      :type="type"
      :placeholder="label"
      :class="[
        ...inputClasses,
        'peer rounded-lg border-2 border-transparent bg-slate-100 px-4 pb-2 pt-5 placeholder-transparent transition duration-300 focus:border-purple-400 focus:bg-white disabled:text-slate-600',
        { 'hover:border-slate-200 hover:bg-white': !disabled },
      ]"
      :disabled="disabled"
    />
    <label
      v-if="label"
      :for="label + '-input'"
      class="absolute left-0.5 top-1.5 ml-4 text-xs text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-slate-500"
    >
      {{ label }}
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "@vue/runtime-core";

defineProps({
  type: { type: String, required: true },
  modelValue: { type: String, required: true },
  label: { type: String, default: "" },
  inputClasses: { type: String, default: "" },
  labelClasses: { type: String, default: "" },
  disabled: { type: Boolean, default: false },
});

const emit = defineEmits(["update:modelValue"]);

const value = ref("");

watch(value, () => {
  emit("update:modelValue", value.value);
});
</script>
