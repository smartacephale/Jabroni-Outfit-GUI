import type {
  ExtractValuesByKey,
  RawSchemeElement,
  SchemeInput,
  SchemeSection,
} from '../types';

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
        'sort by views': () => {},
      },
      {
        'sort by duration': () => {},
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
        label: 'write history',
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

export function setupScheme<
  K extends ExtractValuesByKey<typeof DefaultScheme, 'title'>,
  T extends Partial<SchemeSection<RawSchemeElement>>,
>(scheme: (K | T)[]) {
  const selectedScheme: SchemeInput = scheme.map((section) => {
    if (typeof section === 'string') {
      return DefaultScheme.find((s) => s.title === section) as unknown as T;
    }
    return section as T;
  });

  return selectedScheme;
}
