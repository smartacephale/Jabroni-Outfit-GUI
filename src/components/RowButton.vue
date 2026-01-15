<script setup lang="ts">
import type { SchemeElement } from '../scheme/scheme-element';
import type { StoreState } from '../types';

const props = defineProps<{
  state: StoreState;
  element: SchemeElement;
}>();
</script>
<template>
  <div class=":uno: col-span-2 pt-1">
    <!-- shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] -->
    <button
      @click="props.element.callback"
      class=":uno: w-full box-border border-2 py-1 font-semibold text-xs 
      border-black hover:(bg-black text-white) bg-gray-100!
      transition-colors
      dark:(bg-gray-600 border-zinc-800 hover:bg-gray-500)"
    >
      {{ props.element.name }}
    </button>
  </div>
</template>

<style>
/* @unocss-placeholder */
</style>
