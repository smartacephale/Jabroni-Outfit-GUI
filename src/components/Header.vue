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
    class="flex items-center justify-between p-2 border-b-2 border-black
                bg-white hover:bg-gray-200 select-none
                dark:border-gray-700 dark:bg-zinc-800 dark:hover:bg-gray-600"
  >
    <div class="flex items-center gap-2">
      <Badge :state="props.state" :group="badge" v-if="!!badge"/>
      <span class="font-medium tracking-widest text-[14px]">Config</span>
    </div>
    <div class="flex gap-2 items-center">
      <Sun
        class="text-lg hover:text-gray-500 cursor-pointer"
        @click="props.state.darkmode = !props.state.darkmode"
      />
      <Minus
        class="text-lg hover:text-gray-500 cursor-pointer"
        @click="props.state.hidden = !props.state.hidden"
      />
    </div>
  </div>
</template>
