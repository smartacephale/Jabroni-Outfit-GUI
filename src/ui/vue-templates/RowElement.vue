<script setup lang="ts">
import { computed, type Reactive } from "vue";
import type { RecordV } from "../../store/types";
import type { SchemeRowEl } from "../types";

const props = defineProps<{
  element?: SchemeRowEl,
  state: Reactive<RecordV>,
  localState: Reactive<RecordV>,
}>();

const { element, state, localState } = props;

const { type, model, innerText, label, labelBefore, callback, ...rest } = element as SchemeRowEl;

const isInput = /checkbox|text|number/.test(type);
const tag = isInput ? 'input' : type;
const ctype = isInput ? type : "";
const id = isInput ? model : (Math.random() * 10000000 | 0).toString(16);

const componentStyles = {
  text: "w-full h-8 text-zinc-300 px-3 py-2 mx-2 rounded-sm bg-zinc-700 outline-none focus:outline-gray-600 hover:bg-zinc-600",
  checkbox: "mx-2 size-auto invert checked:invert-0 accent-gray-700",
  number: "w-24 h-8 text-zinc-300 rounded px-3 py-2 bg-gray-700 hover:bg-gray-600 outline-none focus:outline-gray-600",
  button: "mx-2 size-auto text-zinc-300 rounded px-3 py-2 bg-gray-700 hover:bg-gray-600 ml-auto",
  span: "text-zinc-300 ml-auto mr-4",
}

const innerTextValue = computed(() => {
  if (!innerText?.includes('return')) return innerText || "";
  const f = new Function('state', 'localState', `${innerText}`);
  return f(state, localState);
});

const value = new Function('state', 'localState', `return ${model || ""}`)(state, localState);

const updateValue = ({ target: { checked, value } }) => {
  if (!(typeof model === 'string') || !/^state|localState/.test(model)) return;
  const [stateName, stateProp] = (model).split('.');
  const val = type === 'checkbox' ? checked : value;
  props[stateName][stateProp] = val;
};

const vif = computed(() => {
  if (!element?.['v-if']) return true;
  const f = new Function('state', 'localState', `${element['v-if']}`);
  return f(state, localState);
});

// button state
// let callbackWrap: () => Promise<void> | undefined;
// if (callback) {
//   callbackWrap = async () => {
//     callback();
//   }
// }

</script>
<template>
  <label v-if="labelBefore" :for="id" class="text-zinc-300 mx-2 font-mono">{{ labelBefore }}</label>
  <component v-if="vif" :id="id" :is="tag" :type="ctype" :class="componentStyles[type]" :checked="!!value"
    :value="value" v-on:change="updateValue" v-on:input="updateValue" @click="callback" v-bind="rest">
    {{ innerTextValue }}
  </component>
  <label v-if="label" :for="id" class="text-zinc-300 flex font-mono">{{ label }}</label>
</template>