import type { Scheme } from "./types";

export const DefaultScheme: Scheme = {
  excludeFilter: [
    { type: "checkbox", model: "state.filterExclude", label: "exclude" },
    { type: "text", model: "state.filterExcludeWords", placeholder: "regexp: word, word1|word2, f:full_word..." }
  ],
  includeFilter: [
    { type: "checkbox", model: "state.filterInclude", label: "include" },
    { type: "text", model: "state.filterIncludeWords", placeholder: "regexp: word, word1|word2, f:full_word..." }
  ],
  infiniteScroll: [
    { type: "checkbox", model: "state.infiniteScrollEnabled", label: "infinite scroll" },
    {
      type: "span", innerText:
        "return `${stateLocale.pagIndexCur}/${stateLocale.pagIndexLast}`", "v-if": "stateLocale.pagIndexLast > 1"
    }
  ],
  durationFilter: [
    { type: "checkbox", model: "state.filterDuration", label: "duration" },
    { type: "number", model: "state.filterDurationFrom", step: "10", min: "0", max: "72000", labelBefore: "from" },
    { type: "number", model: "state.filterDurationTo", step: "10", min: "0", max: "72000", labelBefore: "to" }
  ],
}

export const extendDefaultScheme = (newScheme: Scheme) =>
  Object.entries(DefaultScheme).reduce((acc, [k, v], i) => {
    if (i === 2) Object.assign(acc, newScheme);
    Object.assign(acc, { [k]: v });
    return acc;
  }, {});

export const defaultSchemeWithPrivateFilter = extendDefaultScheme({
  privateFilter: [
    { type: "checkbox", model: "state.filterPrivate", label: "private" },
    { type: "checkbox", model: "state.filterPublic", label: "public" }
  ]
});
