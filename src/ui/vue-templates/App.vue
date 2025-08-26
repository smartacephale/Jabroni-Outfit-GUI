<script setup lang="ts">
import Config from './icons/Config.vue';
import Close from './icons/Close.vue';
import Gen from './Gen.vue';
import type { Scheme, UIPosition } from '../types';
import type { Reactive } from 'vue';
import type { RecordV } from '../../store/types';

const { state, localState, scheme, position } = defineProps<{
  state: Reactive<RecordV>,
  localState: Reactive<RecordV>,
  scheme?: Scheme,
  position: UIPosition
}>();

const optClasses = {
  fixed: 'fixed',
  right: 'right-0',
  left: 'left-0',
  top: 'top-0',
  bottom: 'bottom-0'
}

const pos = Object.entries(position).filter(([_, v]) => v)
  .map(([k, _]) => optClasses[k]).join(' ');

</script>
<template>
  <div class="z-9999 rounded bg-zinc-800 max-w-full p-2 m-2"
    :class="`${state.hidden ? 'hover:bg-gray-600' : ''} ${pos}`" v-if="state.uiEnabled">

    <div class="flex items-center cursor-pointer py-1 px-2 m-1 rounded"
      :class="!state.hidden ? 'hover:bg-zinc-900' : ''" @click="state.hidden = !state.hidden">
      <span class="m-auto flex mono">
        <span v-if="state.hidden && localState.pagIndexLast as number > 1"
          class="px-3 py-2 mr-2 bg-gray-700 text-zinc-300 font-mono rounded">
          {{ localState.pagIndexCur }}/{{ localState.pagIndexLast }}
        </span>
        <Config v-if="state.hidden" />
        <Close v-if="!state.hidden" />
      </span>
    </div>

    <Gen :scheme="scheme" :localState="localState" :state="state" v-if="!state.hidden" />
  </div>
</template>

<style scoped></style>