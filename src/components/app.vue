<script setup lang="ts">
import { computed } from "vue";
import type { SchemeParsed, StoreState } from "../types";
import Header from "./header.vue";
import Section from "./section.vue";

const props = defineProps<{
	state: StoreState;
	scheme: SchemeParsed;
}>();

const scheme = computed(() => {
	return props.scheme.filter((g) => g.title !== "Badge");
});
</script>
<template>
  <div
    v-if="props.state.uiEnabled"
    id="jabroni-app"
    :data-theme="props.state.darkmode ? 'dark' : 'bright'"
    class="fixed right-0 bottom-0 z-9999999"
    >
    <div
      class=":uno: w-85 max-h-118 flex flex-col m-2 border-2 text-black text-sm
          border-black dark:(border-gray-700)"
    >
      <Header :state="props.state" :scheme="props.scheme"/>

      <div
        class=":uno: flex-1 overflow-y-auto p-2 bg-white
       dark:(border-gray-700 bg-zinc-800)"
        v-if="props.state.hidden"
      >
        <Section :state="props.state" :group="group" v-for="group in scheme"/>
      </div>
    </div>
  </div>
</template>

<style>
/* @unocss-placeholder */
</style>
