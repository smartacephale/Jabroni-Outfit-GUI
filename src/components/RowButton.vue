<script setup lang="ts">
import type { SchemeElement } from '../scheme/scheme-element';
import type { StoreState } from '../types';

const props = defineProps<{
  state: StoreState;
  element: SchemeElement;
}>();
</script>
<template>
  <div class="col-span-2 pt-1">
    <button
      @click="props.element.callback"
      class="w-full border-2 border-black py-1 font-semibold text-[11px]
                                   hover:bg-black hover:text-white transition-colors
                dark:bg-gray-600 dark:border-zinc-800 dark:hover:bg-gray-500"
    >
      {{ props.element.name }}
    </button>
  </div>
</template>
