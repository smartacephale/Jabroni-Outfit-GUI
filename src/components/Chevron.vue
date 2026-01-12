<script setup lang="ts">
import ChevronDown from './icons/ChevronDown.vue';
import ChevronUp from './icons/ChevronUp.vue';

const props = defineProps<{ collapsed: boolean }>();
</script>
<template>
  <ChevronUp class=":uno: text-(--muted-foreground)" v-if="!props.collapsed"/>
  <ChevronDown class=":uno: text-(--muted-foreground)" v-if="props.collapsed"/>
</template>
