<script setup lang="ts">
import { computed } from 'vue';
import type { SchemeElement } from '../scheme/scheme-element';
import type { SchemeGroup, StoreState } from '../types';
import Chevron from './Chevron.vue';
import InputCheckbox from './inputs/InputCheckbox.vue';
import InputNumber from './inputs/InputNumber.vue';
import InputRange from './inputs/InputRange.vue';
import InputText from './inputs/InputText.vue';
import RowButton from './RowButton.vue';

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
    class="border-2 border-black 
                dark:border-gray-700 "
  >
    <div
      @click="switchCollapsed"
      class="border-b-2 border-black px-2 py-1 flex items-center gap-1
                        cursor-pointer bg-gray-50 hover:bg-gray-200
                dark:border-gray-700 dark:bg-zinc-800 dark:hover:bg-gray-600"
    >
      <Chevron :collapsed="!collapsed" class="text-sm"/>
      <span class="font-medium">{{ props.group.title }}</span>
    </div>

    <div
      v-if="!collapsed"
      class="p-2 grid grid-cols-[90px_1fr] gap-y-2 gap-x-2 items-center"
      v-for="se in props.group.content"
    >
      <InputText :state="props.state" :element="se" v-if="se.type === 'text'"/>
      <InputNumber
        :state="props.state"
        :element="se"
        v-if="se.type === 'number'"
      />
      <InputCheckbox
        :state="  props.state"
        :element="se"
        v-if="se.type === 'checkbox'"
      />
      <InputRange
        :state="props.state"
        :element="se"
        v-if="se.type === 'range'"
      />
      <RowButton
        :state="props.state"
        :element="se"
        v-if="se.type === 'button'"
      />
    </div>
  </div>
</template>
