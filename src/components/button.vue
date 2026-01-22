<script setup lang="ts">
import type { SchemeElement } from "../scheme/scheme-element";
import type { StoreState } from "../types";

const props = defineProps<{
	state: StoreState;
	element: SchemeElement;
}>();
</script>
<template>
  <div class=":uno: col-span-full">
    <!-- shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] -->
    <button
      @click="props.element.callback"
      class=":uno: w-full box-border border-2 p-.5 
      font-medium font-mono text-sm cursor-pointer 
      border-black bg-white
      hover:(bg-black text-white)
      dark:(bg-gray-600 border-zinc-800 hover:bg-gray-500 text-zinc-300)"
    >
      {{ props.element.name }}
    </button>
  </div>
</template>

<style>
/* @unocss-placeholder */
</style>
