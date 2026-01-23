<script setup lang="ts">
import { computed } from 'vue';
import type { SchemeElement } from '../scheme/scheme-element';
import type { SchemeGroup, StoreState } from '../types';
import RowButton from './button.vue';
import Chevron from './chevron.vue';
import InputCheckbox from './inputs/input-checkbox.vue';
import InputNumber from './inputs/input-number.vue';
import InputRange from './inputs/input-range.vue';
import InputText from './inputs/input-text.vue';
import InputTime from './inputs/input-time.vue';

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
    class=":uno: border-2 border-black m-y-3
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
      <Chevron :collapsed="!collapsed" class="text-sm" />
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
      <label class=":uno: justify-self-start text-left font-mono">
        {{ x.label }}
      </label>

      <InputText :state="props.state" :element="x" v-if="x.type === 'text'" />
      <InputNumber
        :state="props.state"
        :element="x"
        v-if="x.type === 'number'"
      />
      <InputCheckbox
        :state="props.state"
        :element="x"
        v-if="x.type === 'checkbox'"
      />
      <InputRange :state="props.state" :element="x" v-if="x.type === 'range'" />
      <RowButton :state="props.state" :element="x" v-if="x.type === 'button'" />
      <InputTime :state="props.state" :element="x" v-if="x.type === 'time'" />
    </div>
  </div>
</template>

<style>
/* @unocss-placeholder */
</style>
