import { createApp } from 'vue';
import { Reactive } from 'vue';

export declare type Callback<T> = (...args: T[]) => void;

export declare type HTMLInputType = 'checkbox' | 'text' | 'number' | 'range' | '';

export declare type HTMLTag = keyof HTMLElementTagNameMap;

export declare type HTMLTagOrInputType = keyof HTMLElementTagNameMap | HTMLInputType;

export declare class JabronioGUI {
    app: ReturnType<typeof createApp>;
    private getRoot;
    constructor(scheme: SchemeInput, store: JabronioStore, rootSelector?: string, position?: string);
}

export declare class JabronioStore {
    private callbacks;
    state: StoreState;
    constructor(options?: StoreStateOptions);
    subscribe(callback: Callback<StoreStateRaw>): void;
    notify(subject: StoreStateRaw): void;
    add(key: string, value: Primitive, watchKey?: string, safe?: boolean): this;
    parseState(options: StoreStateOptions): void;
}

export declare type Primitive = string | number | boolean;

export declare type RawSchemeElement = Partial<Exclude<_RawSchemeElement, keyof SchemeGroup<_RawSchemeElement>>>;

declare type _RawSchemeElement = Partial<SchemeElement> & {
    [x: string]: Primitive | (() => void);
};

declare class SchemeElement {
    name?: string;
    value?: Primitive | (() => void);
    watch?: string;
    step?: string;
    min?: string;
    max?: string;
    vif?: string;
    text?: string;
    type: HTMLTagOrInputType;
    label?: string;
    placeholder?: string;
    id: string;
    constructor(schemeElement: RawSchemeElement);
    private parseType;
    private parseNumber;
    private parseLabel;
    private parseModel;
    get isInput(): boolean;
    get htmlTag(): HTMLTag;
    get inputType(): HTMLInputType;
    get callback(): (() => void) | undefined;
}

export declare type SchemeGroup<T> = {
    title: string;
    content: T[];
    collapsed: boolean;
    id: string;
};

export declare type SchemeInput = Partial<SchemeSection<RawSchemeElement>>[];

export declare type SchemeParsed = SchemeGroup<SchemeElement>[];

export declare type SchemeSection<T> = T | SchemeGroup<T>;

export declare function setupScheme(selectFromDefaults: string[], customScheme?: SchemeInput, order?: string[]): SchemeInput;

export declare type StoreState = Reactive<StoreStateRaw>;

export declare type StoreStateOptions = Record<string, {
    watch?: string;
    value: Primitive;
} | Primitive>;

export declare type StoreStateRaw = Record<string, Primitive>;

export { }
