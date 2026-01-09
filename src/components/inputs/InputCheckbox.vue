<script setup lang="ts">
import { computed } from 'vue';
import type { SchemeElement } from '../../scheme/scheme-element';
import type { StoreState } from '../../types';
import Check from '../icons/Check.vue';

const props = defineProps<{
  state: StoreState;
  element: SchemeElement;
}>();

const name = computed(() => props.element.name as string);
</script>
<template>
  <label>{{ props.element.label }}</label>
  <label class="relative inline-flex items-center cursor-pointer">
    <input type="checkbox" v-model="props.state[name]" class="peer sr-only">
    <span
      class="h-4 w-4 border-2 border-black flex items-center justify-center 
        peer-checked:bg-black 
        dark:peer-checked:bg-gray-600 dark:bg-zinc-700"
    >
      <Check
        v-if="props.state[name]"
        class="peer-checked:block text-black text-[12px] stroke-2"
      />
    </span>
  </label>
</template>
