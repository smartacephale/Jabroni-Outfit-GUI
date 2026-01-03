import type { Reactive } from 'vue';
import type { SchemeElement } from '../scheme/scheme-element';

export type Primitive = string | number | boolean;

export type StoreStateRaw = Record<string, Primitive>;

export type StoreState = Reactive<StoreStateRaw>;

export type StoreStateOptions = Record<
  string,
  { watch?: string; value: Primitive } | Primitive
>;

export type Callback<T> = (...args: T[]) => void;

type _RawSchemeElement = Partial<SchemeElement> & {
  [x: string]: Primitive | (() => void);
};

export type SchemeGroup<T> = {
  title: string;
  content: T[];
  // by default collapsed is false and title is ''
  collapsed: boolean;
  id: string;
};

export type RawSchemeElement = Partial<
  Exclude<_RawSchemeElement, keyof SchemeGroup<_RawSchemeElement>>
>;

export type SchemeSection<T> = T | SchemeGroup<T>;

export type SchemeInput = Partial<SchemeSection<RawSchemeElement>>[];

export type SchemeParsed = SchemeGroup<SchemeElement>[];

export type HTMLInputType = 'checkbox' | 'text' | 'number' | 'range' | '';

export type HTMLTagOrInputType = keyof HTMLElementTagNameMap | HTMLInputType;

export type HTMLTag = keyof HTMLElementTagNameMap;
