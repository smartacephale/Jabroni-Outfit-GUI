import type {
  ExtractValuesByKey,
  RawSchemeElement,
  SchemeGroup,
  SchemeInput,
  SchemeSection,
} from '../types';

export function setupScheme<
  K extends ExtractValuesByKey<SchemeInput, 'title'>,
  T extends Partial<SchemeSection<RawSchemeElement>>,
>(scheme: (K | T)[], baseScheme: SchemeInput = []) {
  const schemePreprocessed = scheme.filter((s) => {
    if (typeof s === 'string') {
      if (scheme.find((ss) => typeof ss !== 'string' && ss.title === s)) {
        return false;
      }
    }
    return true;
  });

  const selectedScheme: SchemeInput = schemePreprocessed.map((section) => {
    if (typeof section === 'string') {
      return baseScheme.find((s) => s.title === section) as unknown as T;
    }

    const existingSection = baseScheme.find(
      (s) => s.title === section.title,
    ) as Partial<SchemeGroup<RawSchemeElement>>;

    if (Array.isArray(section.content) && existingSection) {
      const newSection = { ...existingSection } as Partial<
        SchemeSection<RawSchemeElement>
      >;
      newSection.content = [
        ...(newSection.content as Partial<RawSchemeElement>[]),
        ...section.content,
      ];

      return newSection;
    }

    return section as T;
  });

  return selectedScheme;
}
