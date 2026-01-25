<script setup lang="ts">
import { computed } from 'vue';
import type { SchemeElement } from '../scheme/scheme-element';
import type { StoreState } from '../types';
import Button from './button.vue';
import InputCheckbox from './inputs/input-checkbox.vue';
import InputNumber from './inputs/input-number.vue';
import InputRange from './inputs/input-range.vue';
import InputText from './inputs/input-text.vue';
import InputTime from './inputs/input-time.vue';

const props = defineProps<{
  state: StoreState;
  element: SchemeElement;
}>();

const inputMapping = {
  text: InputText,
  number: InputNumber,
  time: InputTime,
  checkbox: InputCheckbox,
  button: Button,
  range: InputRange,
};

const inputType = computed(() => inputMapping[props.element.type]);
</script>

<template>
  <label class=":uno: justify-self-start text-left font-mono">
    {{ props.element.label }}
  </label>

  <component :is="inputType" :element="props.element" :state="props.state" />
</template>

<style>
/* @unocss-placeholder */
</style>
