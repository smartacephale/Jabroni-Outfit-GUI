import type { StateOptions } from "./types";

export const stateOptions = {
  EXCLUDE: {
    filterExclude: { value: false, persistent: true, watch: true },
    filterExcludeWords: { value: "", persistent: true, watch: "filterExclude" },
  },
  INCLUDE: {
    filterInclude: { value: false, persistent: true, watch: true },
    filterIncludeWords: { value: "", persistent: true, watch: "filterInclude" },
  },
  MISC: {
    infiniteScrollEnabled: { value: true, persistent: true, watch: true },
    uiEnabled: { value: true, persistent: true, watch: true }
  },
  DURATION_FILTER: {
    filterDuration: { value: false, persistent: true, watch: true },
    filterDurationFrom: { value: 0, type: 'number', persistent: true, watch: 'filterDuration' },
    filterDurationTo: { value: 600, type: 'number', persistent: true, watch: 'filterDuration' }
  },
  PRIVACY_FILTER: {
    filterPrivate: { value: false, persistent: true, watch: true },
    filterPublic: { value: false, persistent: true, watch: true }
  },
  HD_FILTER: {
    filterHD: { value: false, persistent: true, watch: true }
  },
  PAGINATION: {
    pagIndexLast: { value: 1, persistent: false, watch: true },
    pagIndexCur: { value: 1, persistent: false, watch: true }
  }
}

export const defaultStateInclExclMiscPagination: StateOptions = Object.assign({}, stateOptions.EXCLUDE, stateOptions.INCLUDE, stateOptions.MISC, stateOptions.PAGINATION);
export const defaultStateWithDuration: StateOptions = Object.assign({}, defaultStateInclExclMiscPagination, stateOptions.DURATION_FILTER);
export const defaultStateWithDurationAndHD: StateOptions = Object.assign({}, defaultStateWithDuration, stateOptions.HD_FILTER);
export const defaultStateWithDurationAndPrivacy: StateOptions = Object.assign({}, defaultStateWithDuration, stateOptions.PRIVACY_FILTER);
export const defaultStateWithDurationAndPrivacyAndHD: StateOptions = Object.assign({}, defaultStateWithDurationAndPrivacy, stateOptions.HD_FILTER);
