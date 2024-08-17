import { Reactive } from 'vue';

export declare const DefaultScheme: Scheme;

export declare const defaultSchemeWithPrivateFilter: {};

export declare const defaultStateInclExclMiscPagination: StateOptions;

export declare const defaultStateWithDuration: StateOptions;

export declare const defaultStateWithDurationAndPrivacy: StateOptions;

export declare const extendDefaultScheme: (newScheme: Scheme) => {};

export declare class JabroniOutfitStore {
    private callbacks;
    state: Reactive<RecordV> | undefined;
    stateLocale: Reactive<RecordV> | undefined;
    constructor(options?: StateOptions);
    subscribe(callback: NotifyApply): void;
    notify(subject: RecordV): void;
    parseState: (st: StateOptions) => void;
}

export declare class JabroniOutfitUI {
    private getRoot;
    constructor({ state, stateLocale }: JabroniOutfitStore, scheme?: Scheme, rootSelector?: string, position?: UIPosition);
}

declare type NotifyApply = (input: RecordV) => void;

declare type RecordV = Record<string, string | number | boolean>;

declare interface Scheme {
    [key: string]: SchemeRow;
}

declare type SchemeRow = SchemeRowEl[];

declare interface SchemeRowEl {
    type: 'checkbox' | 'text' | 'number' | 'span' | 'button';
    model?: string;
    label?: string;
    labelBefore?: string;
    innerText?: string;
    max?: string;
    min?: string;
    step?: string;
    "v-if"?: string;
    placeholder?: string;
    callback?: () => void;
}

declare interface StateOption {
    value: string | number | boolean;
    persistent: boolean;
    watch: boolean | string;
    type: string;
}

declare type StateOptions = Record<string, StateOption>;

declare interface UIPosition {
    fixed: boolean;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
}

export { }
