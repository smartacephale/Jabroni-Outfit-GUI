<script setup lang="ts">
import { computed } from 'vue';
import type { SchemeElement } from '../../scheme/scheme-element';
import type { StoreState } from '../../types';

const props = defineProps<{
  state: StoreState;
  element: SchemeElement;
}>();

const name = computed(() => props.element.name as string);
</script>
<template>
  <label>{{ props.element.label }}</label>
  <div class=":uno: flex items-center gap-1 w-full">
    <input
      type="range"
      min="0"
      max="100"
      v-model="props.state[name]"
      class="custom-range"
      style="width: calc(100% - 30px);"
      oninput="this.nextElementSibling.value = this.value"
    >

    <input
      type="number"
      v-model="props.state[name]"
      class=":uno: w-20 box-border border-2 px-1 py-1 text-center focus:outline-none uno-input-colors"
      oninput="this.previousElementSibling.value = this.value"
    >
  </div>
</template>

<style scoped>
.custom-range {
  -webkit-appearance: none;
  appearance: none;
  height: 5px;
  background: black;
  cursor: pointer;
}

.custom-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 12px;
  height: 12px;
  background: black;
  border: 2px solid black;
  cursor: pointer;
}

.custom-range::-moz-range-thumb {
  width: 13px;
  height: 13px;
  background: black;
  border: none;
  border-radius: 0;
  cursor: pointer;
}

input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>
