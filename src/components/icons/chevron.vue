<script setup lang="ts">
import { computed } from 'vue';
import ChevronDown from './chevron-down.vue';
import ChevronUp from './chevron-up.vue';

const props = defineProps<{ collapsed: boolean }>();

const icon = computed(() => (props.collapsed ? ChevronDown : ChevronUp));
</script>

<template>
  <component :is="icon" class=":uno: text-(--muted-foreground) text-sm" />
</template>

<style>
/* @unocss-placeholder */
</style>
