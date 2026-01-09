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
    type="number"
    v-model="props.state[name]"
    class="w-full box-border border-2 px-1 py-1 focus:outline-none tw-input-colors"
    :placeholder="props.element.placeholder || ''"
    :min="props.element.min || ''"
    :max="props.element.max || ''"
    :step="props.element.step || ''"
  >
</template>
