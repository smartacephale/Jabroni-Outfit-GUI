import type { Reactive } from "vue";

export interface StateOption {
  value: string | number | boolean;
  persistent: boolean;
  watch: boolean | string;
  type: string;
};

export type StateOptions = Record<string, StateOption>

export type NotifyApply = (input: RecordV) => void;

export type RecordV = Record<string, string | number | boolean>;

export type StoreState = Reactive<RecordV>;