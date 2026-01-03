<script setup lang="ts">
import { computed } from 'vue';
import type { SchemeParsed, StoreState } from '../types';
import Header from './Header.vue';
import Section from './Section.vue';

const props = defineProps<{
  state: StoreState;
  scheme: SchemeParsed;
  position: string;
}>();

const scheme = computed(() => {
  return props.scheme.filter((g) => g.title !== 'Badge');
});
</script>
<template>
  <div
    v-if="props.state.uiEnabled"
    id="jabroni-app"
    :data-theme="props.state.darkmode ? 'dark' : 'bright'"
    :class="`${props.position}
            w-85 max-h-118 flex flex-col m-2
            bg-white  border-2 border-black dark:border-gray-700 dark:bg-zinc-800 dark:text-zinc-300
            shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
            text-black text-xs font-light`"
  >
    <Header :state="props.state" :scheme="props.scheme"/>

    <div class="flex-1 overflow-y-auto p-2 space-y-2" v-if="props.state.hidden">
      <Section :state="props.state" :group="group" v-for="group in scheme"/>
    </div>
  </div>
</template>

<style scoped>
#jabroni-app {
  font-family: monospace;
}
</style>
