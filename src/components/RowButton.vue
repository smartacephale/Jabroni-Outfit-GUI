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
    <button
      @click="props.element.callback"
      class=":uno: w-full box-border border-2 py-1 uno-btn-font uno-btn-color"
    >
      {{ props.element.name }}
    </button>
  </div>
</template>
