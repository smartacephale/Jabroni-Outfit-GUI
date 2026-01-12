<script setup lang="ts">
import { computed } from 'vue';
import type { SchemeParsed, StoreState } from '../types';
import Badge from './Badge.vue';
import Minus from './icons/Minus.vue';
import Sun from './icons/Sun.vue';

const props = defineProps<{
  state: StoreState;
  scheme: SchemeParsed;
}>();

const badge = computed(() => {
  return props.scheme.find((g) => g.title === 'Badge');
});
</script>
<template>
  <div
    class=":uno: uno-header-color"
  >
    <div class=":uno: flex items-center gap-2">
      <Badge :state="props.state" :group="badge" v-if="!!badge"/>
      <span class=":uno: font-medium tracking-widest text-[14px]">Config</span>
    </div>
    <div class=":uno: flex gap-2 items-center">
      <Sun
        class=":uno: text-lg hover:text-gray-500 cursor-pointer"
        @click="props.state.darkmode = !props.state.darkmode"
      />
      <Minus
        class=":uno: text-lg hover:text-gray-500 cursor-pointer"
        @click="props.state.hidden = !props.state.hidden"
      />
    </div>
  </div>
</template>
