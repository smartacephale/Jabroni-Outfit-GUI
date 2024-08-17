<script setup lang="ts">
import type { Reactive } from "vue";
import type { RecordV } from "../../store/types";
import type { Scheme } from "../types";
import RowElement from './RowElement.vue'

const { scheme, state, stateLocale } = defineProps<{
  state: Reactive<RecordV>,
  stateLocale: Reactive<RecordV>,
  scheme?: Scheme
}>()

const rows = Object.values(scheme as Scheme);

</script>

<template>
  <div v-for="row in rows" class="flex items-center bg-zinc-900 py-2 px-2 m-1 font-mono rounded">
    <RowElement v-for="r in row" :element="r" :stateLocale="stateLocale" :state="state" />
  </div>
</template>