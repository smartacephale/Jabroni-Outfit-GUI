<script setup lang="ts">
import { computed } from 'vue';
import type { SchemeElement } from '../scheme/scheme-element';
import type { SchemeGroup, StoreState } from '../types';

const props = defineProps<{
  state: StoreState;
  group: SchemeGroup<SchemeElement>;
}>();

const el = computed(() => props.group.content[0]);

function computedExpression(expr: string) {
  return computed(() => {
    const f = new Function('state', `${expr}`);
    return f(props.state);
  });
}

const vif = computedExpression(el.value?.vif || '');
const textContent = computedExpression(el.value?.text || '');
</script>
<template>
  <span
    v-if="vif"
    class="bg-black text-white px-1.5 py-1 text-[11px] font-semibold dark:border-2 dark:border-zinc-700 dark:bg-gray-600 dark:text-zinc-300"
  >
    {{ textContent }}</span
  >
</template>
