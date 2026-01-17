import type { ExtractValuesByKey, SchemeInput } from '../types';

export const DefaultScheme = [
  {
    title: 'Text Filter',
    collapsed: true,
    content: [
      { filterExclude: false, label: 'exclude' },
      {
        filterExcludeWords: '',
        label: 'keywords',
        watch: 'filterExclude',
        placeholder: 'word, word1|word2, f:full_word...',
      },
      { filterInclude: false, label: 'include' },
      {
        filterIncludeWords: '',
        label: 'keywords',
        watch: 'filterInclude',
        placeholder: 'word, word1|word2, f:full_word...',
      },
    ],
  },
  {
    title: 'Duration Filter',
    collapsed: true,
    content: [
      { filterDuration: false, label: 'enable' },
      {
        filterDurationFrom: 0,
        watch: 'filterDuration',
        label: 'from',
        type: 'time',
      },
      {
        filterDurationTo: 600,
        watch: 'filterDuration',
        label: 'to',
        type: 'time',
      },
    ],
  },
  {
    title: 'Sort By',
    content: [
      {
        views: () => {
          //@ts-expect-error
          window.sortByViews?.();
        },
      },
      {
        duration: () => {
          //@ts-expect-error
          window.sortByDuration?.();
        },
      },
    ],
  },
  {
    title: 'Privacy Filter',
    content: [
      { filterPrivate: false, label: 'private' },
      { filterPublic: false, label: 'public' },
      {
        'check access 🔓': () => {
          //@ts-expect-error
          window.requestAccess?.();
        },
      },
    ],
  },
  {
    title: 'Quality Filter',
    content: [{ filterHD: false, label: 'HD' }],
  },
  {
    title: 'Advanced',
    content: [
      {
        infiniteScrollEnabled: true,
        label: 'infinite scroll',
      },
      {
        autoRequestAccess: false,
        label: 'auto friend request',
      },
      {
        writeHistory: false,
      },
    ],
  },
  {
    // Pagination
    title: 'Badge',
    content: [
      {
        text: 'return `${state.$paginationOffset}/${state.$paginationLast}`',
        vif: 'return state.$paginationLast > 1',
      },
    ],
  },
] as const satisfies SchemeInput;

function selectFromScheme(keys: string[], scheme: SchemeInput): SchemeInput {
  return scheme.filter((g) => g.title && keys.some((k) => k === g.title));
}

export function setupScheme<
  K extends ExtractValuesByKey<typeof DefaultScheme, 'title'>,
  T extends SchemeInput,
  TK extends ExtractValuesByKey<T, 'title'>,
>(
  selectFromDefaults: K[],
  customScheme: T = [] as unknown as T,
  order?: (K | TK)[],
) {
  const selectedScheme: SchemeInput = selectFromScheme(
    selectFromDefaults,
    DefaultScheme,
  );

  const finalScheme = [...customScheme, ...selectedScheme];

  if (order) {
    return selectFromScheme(order, finalScheme);
  }

  return finalScheme;
}
