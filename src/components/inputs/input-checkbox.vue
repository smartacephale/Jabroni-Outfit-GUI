<script setup lang="ts">
import { computed } from "vue";
import type { SchemeElement } from "../../scheme/scheme-element";
import type { StoreState } from "../../types";
import Check from "../icons/check.vue";

const props = defineProps<{
	state: StoreState;
	element: SchemeElement;
}>();

const name = computed(() => props.element.name as string);
</script>
<template>
  <label class=":uno: justify-self-start text-left font-mono">{{ props.element.label }}</label>

  <label class=":uno: relative inline-flex items-center cursor-pointer">
    <input type="checkbox" v-model="props.state[name]" class="peer sr-only">
    <span
      class=":uno: h-5 w-5 border-2 box-border flex items-center justify-center 
        peer-checked:bg-black border-black
        transition-colors
        dark:(peer-checked:bg-gray-700)"
    >
      <Check
        v-if="props.state[name]"
        class=":uno: peer-checked:block text-black text-sm stroke-2"
      />
    </span>
  </label>
</template>

<style>
/* @unocss-placeholder */
</style>
