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
  <label class=":uno: justify-self-start text-left font-mono">{{ props.element.label }}</label>

  <input
    type="number"
    v-model="props.state[name]"
    class=":uno: w-full box-border border-2 p-1 text-sm
      border-black focus:outline-none focus:bg-yellow-50
      transition-colors
      dark:(text-zinc-300 bg-zinc-700 focus:outline-gray-600
        hover:bg-zinc-600 focus:bg-zinc-700)"
    :placeholder="props.element.placeholder || ''"
    :min="props.element.min || ''"
    :max="props.element.max || ''"
    :step="props.element.step || ''"
  >
</template>

<style>
/* @unocss-placeholder */
</style>
