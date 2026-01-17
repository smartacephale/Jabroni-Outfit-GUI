<script setup lang="ts">
import ChevronDown from './icons/chevron-down.vue';
import ChevronUp from './icons/chevron-up.vue';

const props = defineProps<{ collapsed: boolean }>();
</script>
<template>
  <ChevronUp class=":uno: text-(--muted-foreground)" v-if="!props.collapsed"/>
  <ChevronDown class=":uno: text-(--muted-foreground)" v-if="props.collapsed"/>
</template>

<style>
/* @unocss-placeholder */
</style>
