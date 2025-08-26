import type { Scheme } from "./types";

export const DefaultScheme: Scheme = {
  excludeFilter: [
    { type: "checkbox", model: "state.filterExclude", label: "exclude" },
    { type: "text", model: "state.filterExcludeWords", placeholder: "word, word1|word2, f:full_word..." }
  ],
  includeFilter: [
    { type: "checkbox", model: "state.filterInclude", label: "include" },
    { type: "text", model: "state.filterIncludeWords", placeholder: "word, word1|word2, f:full_word..." }
  ],
  infiniteScroll: [
    { type: "checkbox", model: "state.infiniteScrollEnabled", label: "infinite scroll" },
    {
      type: "span", innerText:
        "return `${localState.pagIndexCur}/${localState.pagIndexLast}`", "v-if": "return localState.pagIndexLast > 1"
    }
  ],
  durationFilter: [
    { type: "checkbox", model: "state.filterDuration", label: "duration" },
    { type: "number", model: "state.filterDurationFrom", step: "10", min: "0", max: "72000", labelBefore: "from" },
    { type: "number", model: "state.filterDurationTo", step: "10", min: "0", max: "72000", labelBefore: "to" }
  ],
}

export const customScheme: Scheme = {
  sortFilter: [
    {
      type: "span", innerText: 'sort by:'
    },
    {
      type: 'button',
      innerText: 'views',
      callback: () => {
        //@ts-ignore
        if (window?.sortByViews) window.sortByViews();
      },
    },
    {
      type: 'button',
      innerText: 'duration',
      callback: () => {
        //@ts-ignore
        if (window?.sortByDuration) window.sortByDuration();
      },
    }],
  privacyFilter: [
    { type: "checkbox", model: "state.filterPrivate", label: "private" },
    { type: "checkbox", model: "state.filterPublic", label: "public" }
  ],
  hdFilter: [
    { type: "checkbox", model: "state.filterHD", label: "HD" },
  ]
}

export const extendScheme = (scheme: Scheme, newScheme: Scheme) =>
  Object.entries(scheme).reduce((acc, [k, v], i) => {
    if (i === 2) Object.assign(acc, newScheme);
    Object.assign(acc, { [k]: v });
    return acc;
  }, {});

export const defaultSchemeWithPrivacyFilter = extendScheme(DefaultScheme, {
  privacyFilter: customScheme.privacyFilter
});

export const defaultSchemeWithPrivacyFilterWithHD = extendScheme(defaultSchemeWithPrivacyFilter, {
  hdFilter: customScheme.hdFilter
});

export const defaultSchemeWithPrivacyFilterWithHDwithSort = extendScheme(defaultSchemeWithPrivacyFilterWithHD, {
  sortFilter: customScheme.sortFilter
});

