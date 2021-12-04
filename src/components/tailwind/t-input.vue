<template>
  <div class="relative flex flex-col mb-2 mt-6">
    <input
      :id="label + '-input'"
      v-model="value"
      :type="type"
      :placeholder="label"
      :class="[...inputClasses, 'peer px-4 pb-2 pt-5 border-2 border-transparent placeholder-transparent transition duration-300 hover:bg-white hover:border-gray-200 focus:bg-white focus:border-purple-400 bg-gray-100 rounded-lg']"
    />
    <label
      v-if="label"
      :for="label + '-input'"
      class="absolute left-0.5 top-1.5 peer-focus:top-1.5 peer-placeholder-shown:top-4 ml-4 peer-placeholder-shown:text-gray-400 text-gray-500 peer-focus:text-gray-500 peer-placeholder-shown:text-base peer-focus:text-xs text-xs transition-all"
      >{{ label }}</label
    >
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
});

const emit = defineEmits(["update:modelValue"]);

const value = ref("");

watch(value, () => {
  emit("update:modelValue", value.value);
});
</script>
