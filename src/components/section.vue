<script setup lang="ts">
import { computed } from 'vue';
import type { SchemeElement } from '../scheme/scheme-element';
import type { SchemeGroup, StoreState } from '../types';
import Chevron from './icons/chevron.vue';
import SectionElement from './section-element.vue';

const props = defineProps<{
  state: StoreState;
  group: SchemeGroup<SchemeElement>;
}>();

function switchCollapsed() {
  props.state[props.group.id] = !props.state[props.group.id];
}

const collapsed = computed(() => !!props.state[props.group.id]);
</script>

<template>
  <div
    class=":uno: mb-2 last:mb-0 border-2 border-black
     *:text-sm *:font-mono!
      transition-colors
       dark:(border-gray-700 bg-zinc-800 hover:bg-gray-600 text-zinc-300)"
  >
    <div
      @click="switchCollapsed"
      class=":uno: border-b-2 p-1 flex items-center gap-1 cursor-pointer
       border-black bg-gray-50 hover:bg-gray-200
       transition-colors font-mono
       dark:(border-gray-700 bg-zinc-800 hover:bg-gray-600 text-zinc-300)"
    >
      <Chevron :collapsed="!collapsed" />
      <span class=":uno: text-mono font-medium text-sm"
        >{{ props.group.title }}</span
      >
    </div>

    <div
      v-if="!collapsed"
      v-for="x in props.group.content"
      class=":uno: p-2 grid grid-cols-[5.5rem_1fr] gap-2 items-center font-mono
       dark:(border-gray-700 bg-zinc-800 text-zinc-300)"
    >
      <SectionElement :state="props.state" :element="x" />
    </div>
  </div>
</template>

<style>
/* @unocss-placeholder */
</style>
