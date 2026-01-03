<script setup lang="ts">
import ChevronDown from './icons/ChevronDown.vue';
import ChevronUp from './icons/ChevronUp.vue';

const props = defineProps<{ collapsed: boolean }>();
</script>
<template>
  <ChevronUp class="text-(--muted-foreground)" v-if="!props.collapsed"/>
  <ChevronDown class="text-(--muted-foreground)" v-if="props.collapsed"/>
</template>
