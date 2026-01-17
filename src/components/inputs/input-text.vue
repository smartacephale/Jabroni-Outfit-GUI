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
  <input
    type="text"
    v-model="props.state[name]"
    class=":uno: w-full box-border border-2 px-1 py-1 
      font-mono
      focus:outline-none border-black focus:bg-yellow-50 hover:bg-gray-100
      transition-colors
      dark:(text-zinc-300 bg-zinc-700 focus:outline-gray-600
        hover:bg-zinc-600 focus:bg-zinc-700)"
    :placeholder="props.element.placeholder || ''"
  >
</template>

<style>
/* @unocss-placeholder */
</style>
