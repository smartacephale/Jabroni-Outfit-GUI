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
    class=":uno: px-1.5 py-1 font-mono font-semibold text-sm 
    bg-black text-white 
    dark:(border-zinc-700 bg-gray-600 text-zinc-300 border-2)"
  >
    {{ textContent }}</span
  >
</template>

<style>
/* @unocss-placeholder */
</style>
