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
    :class="props.position"
  >
    <div
      class=":uno: w-85 max-h-118 flex flex-col m-2 border-2
          border-black
          dark:(border-gray-700)
          shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
    >
      <Header :state="props.state" :scheme="props.scheme"/>

      <div
        class=":uno: flex-1 overflow-y-auto p-2 space-y-2
        bg-white
       dark:(border-gray-700 bg-zinc-800)"
        v-if="props.state.hidden"
      >
        <Section :state="props.state" :group="group" v-for="group in scheme"/>
      </div>
    </div>
  </div>
</template>
