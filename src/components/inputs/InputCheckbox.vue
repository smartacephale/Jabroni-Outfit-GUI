<script setup lang="ts">
import { computed } from 'vue';
import type { SchemeElement } from '../../scheme/scheme-element';
import type { StoreState } from '../../types';
import Check from '../icons/Check.vue';

const props = defineProps<{
  state: StoreState;
  element: SchemeElement;
}>();

const name = computed(() => props.element.name as string);
</script>
<template>
  <label>{{ props.element.label }}</label>
  <label class="uno-checkbox-label">
    <input type="checkbox" v-model="props.state[name]" class="uno-checkbox-input">
    <span
      class="uno-checkbox-colors"
    >
      <Check
        v-if="props.state[name]"
        class="uno-checkbox-mark"
      />
    </span>
  </label>
</template>
