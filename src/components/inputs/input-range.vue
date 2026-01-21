<script setup lang="ts">
import { computed } from "vue";
import type { SchemeElement } from "../../scheme/scheme-element";
import type { StoreState } from "../../types";

const props = defineProps<{
	state: StoreState;
	element: SchemeElement;
}>();

const name = computed(() => props.element.name as string);
</script>
<template>
  <label class=":uno: justify-self-start text-left text-mono">{{ props.element.label }}</label>

  <div class=":uno: flex items-center gap-1">
    <input
      type="range"
      min="0"
      max="100"
      v-model="props.state[name]"
      style="width: calc(100% - 30px);"
      oninput="this.nextElementSibling.value = this.value"
    >

    <input
      type="number"
      v-model="props.state[name]"
      class=":uno: w-20 box-border border-2 p-1 text-center text-sm
      border-black focus:outline-none focus:bg-yellow-50
      transition-colors
      dark:(text-zinc-300 bg-zinc-700 focus:outline-gray-600
        hover:bg-zinc-600 focus:bg-zinc-700)"
      oninput="this.previousElementSibling.value = this.value"
    >
  </div>
</template>

<style scoped>
input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  height: 5px;
  background: black;
  cursor: pointer;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 12px;
  height: 12px;
  background: black;
  border: 2px solid black;
  cursor: pointer;
}

input[type="range"]::-moz-range-thumb {
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

<style>
/* @unocss-placeholder */
</style>
