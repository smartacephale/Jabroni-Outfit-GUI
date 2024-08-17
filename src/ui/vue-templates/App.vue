<script setup lang="ts">
import Config from './icons/Config.vue';
import Close from './icons/Close.vue';
import Gen from './Gen.vue';
import type { Scheme } from '../types';
import type { Reactive } from 'vue';
import type { RecordV } from '../../store/types';

const { state, stateLocale, scheme } = defineProps<{
  state: Reactive<RecordV>,
  stateLocale: Reactive<RecordV>,
  scheme?: Scheme
}>();

</script>
<template>
  <div class="fixed bottom-0 right-0 z-9999 rounded bg-zinc-800 max-w-full p-2 m-2"
    :class="state.hidden ? 'hover:bg-gray-600' : ''" v-if="state.uiEnabled">

    <div class="flex items-center cursor-pointer py-1 px-2 m-1 rounded"
      :class="!state.hidden ? 'hover:bg-zinc-900' : ''" @click="state.hidden = !state.hidden">
      <span class="m-auto flex mono">
        <span v-if="state.hidden && stateLocale.pagIndexLast as number > 1"
          class="px-3 py-2 mr-2 bg-gray-700 text-zinc-300 font-mono rounded ">
          {{ stateLocale.pagIndexCur }}/{{ stateLocale.pagIndexLast }}
        </span>
        <Config v-if="state.hidden" />
        <Close v-if="!state.hidden" />
      </span>
    </div>

    <Gen :scheme="scheme" :stateLocale="stateLocale" :state="state" v-if="!state.hidden" />
  </div>
</template>

<style scoped></style>