<script setup lang="ts">
import { computed } from "vue";
import type { SchemeParsed, StoreState } from "../types";
import Badge from "./badge.vue";
import Minus from "./icons/minus.vue";
import Sun from "./icons/sun.vue";

const props = defineProps<{
	state: StoreState;
	scheme: SchemeParsed;
}>();

const badge = computed(() => {
	return props.scheme.find((g) => g.title === "Badge");
});
</script>
<template>
  <div
    class=":uno: text-lg flex items-center justify-between p-2 border-b-2 select-none 
        border-black bg-white hover:bg-gray-200
        transition-colors
        dark:(border-gray-700 bg-zinc-800 hover:bg-gray-600 text-zinc-300)"
  >
    <div class=":uno: flex items-center gap-2">
      <Badge :state="props.state" :group="badge" v-if="!!badge"/>
      <span class=":uno: font-medium font-mono! tracking-widest text-base">Config</span>
    </div>
    <div class=":uno: flex gap-2">
      <Sun
        class=":uno: text-lg hover:text-gray-500 cursor-pointer transition-colors"
        @click="props.state.darkmode = !props.state.darkmode"
      />
      <Minus
        class=":uno: text-lg hover:text-gray-500 cursor-pointer transition-colors"
        @click="props.state.hidden = !props.state.hidden"
      />
    </div>
  </div>
</template>

<style>
/* @unocss-placeholder */
</style>
