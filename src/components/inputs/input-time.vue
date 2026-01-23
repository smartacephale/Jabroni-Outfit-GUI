<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue';
import type { SchemeElement } from '../../scheme/scheme-element';
import type { StoreState } from '../../types';

const props = defineProps<{
  state: StoreState;
  element: SchemeElement;
}>();

const Duration = {
  h: { max: 99, value: ref('00'), inputRef: ref<HTMLInputElement>() },
  m: { max: 59, value: ref('00'), inputRef: ref<HTMLInputElement>() },
  s: { max: 59, value: ref('00'), inputRef: ref<HTMLInputElement>() },
};

const keys = Object.keys(Duration) as (keyof typeof Duration)[];

const pad = (n: number | string) => String(n).padStart(2, '0');

const totalSeconds = computed({
  get: () => {
    const h = parseInt(Duration.h.value.value) || 0;
    const m = parseInt(Duration.m.value.value) || 0;
    const s = parseInt(Duration.s.value.value) || 0;
    return h * 3600 + m * 60 + s;
  },
  set: (newVal) => {
    const h = Math.floor(newVal / 3600);
    const m = Math.floor((newVal % 3600) / 60);
    const s = newVal % 60;

    Duration.h.value.value = pad(h);
    Duration.m.value.value = pad(m);
    Duration.s.value.value = pad(s);
  },
});

watch(
  () => props.state[props.element.name as string],
  (val) => {
    if (typeof val === 'number' && val !== totalSeconds.value) {
      totalSeconds.value = val;
    }
  },
  { immediate: true },
);

const onInput = (e: Event, key: keyof typeof Duration, index: number) => {
  const el = e.target as HTMLInputElement;
  let val = el.value.replace(/\D/g, '');

  if (val.length > 2) val = val.slice(-2);

  if (parseInt(val) > Duration[key].max) val = Duration[key].max.toString();

  Duration[key].value.value = val;
  props.state[props.element.name as string] = totalSeconds.value;

  if (val.length === 2 && index < keys.length - 1) {
    nextTick(() => {
      Duration[key === 'h' ? 'm' : 's'].inputRef.value?.focus();
    });
  }
};

const onBlur = (key: keyof typeof Duration) => {
  Duration[key].value.value = pad(Duration[key].value.value || 0);
};

const onKeyDown = (e: KeyboardEvent, key: keyof typeof Duration) => {
  if (e.key === 'Backspace') {
    e.preventDefault();
    Duration[key].value.value = '00';
    Duration[key === 's' ? 'm' : 'h'].inputRef.value?.focus();
  }
};
</script>

<template>
  <div
    class=":uno: flex box-border border-2 p-.5 justify-center w-34 text-sm
      focus-within:border-gray-500 focus-within:ring-1 
      transition-all
      border-black
      bg-white dark:bg-gray-700"
  >
    <template v-for="(config, key, index) in Duration" :key="key">
      <span
        v-if="index > 0"
        class=":uno: mx-0.5 text-slate-400 font-bold select-none"
        >:</span
      >

      <input
        :ref="(el) => config.inputRef.value = el as HTMLInputElement"
        v-model="config.value.value"
        type="text"
        placeholder="00"
        class=":uno: dark:text-slate-300 w-7 text-center focus:outline-none focus:bg-transparent dark:bg-transparent"
        @input="onInput($event, key, index)"
        @keydown="onKeyDown($event, key)"
        @blur="onBlur(key)"
      >
    </template>
  </div>
</template>

<style>
/* @unocss-placeholder */
</style>
