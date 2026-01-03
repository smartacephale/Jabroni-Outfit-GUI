import { JabronioStore } from '../store';
import type {
  RawSchemeElement,
  SchemeGroup,
  SchemeInput,
  SchemeParsed,
  SchemeSection,
} from '../types';
import { SchemeElement } from './scheme-element';

export class SchemeParser {
  public parsedScheme: SchemeParsed;

  constructor(
    public scheme: SchemeInput,
    public store: JabronioStore = new JabronioStore({}),
  ) {
    this.parsedScheme = this.parseScheme();
  }

  static parse(...args: ConstructorParameters<typeof SchemeParser>): {
    scheme: SchemeParsed;
    store: JabronioStore;
  } {
    const { parsedScheme, store } = new SchemeParser(...args);
    // console.log('parsed scheme', parsedScheme);
    // console.log('parsed store', JSON.parse(JSON.stringify(store)));
    return { scheme: parsedScheme, store };
  }

  parseSchemeElement(schemeElement: SchemeElement) {
    this.parseStatePropsFromModel(schemeElement);
    this.parseStatePropsFromExpressions(schemeElement.text);
    this.parseStatePropsFromExpressions(schemeElement.vif);
  }

  parseStatePropsFromModel(schemeElement: SchemeElement) {
    const { name, value } = schemeElement;
    if (
      name === undefined ||
      value === undefined ||
      typeof value === 'function'
    )
      return;
    this.store.add(name, value);
    schemeElement.value = this.store.state[name];
  }

  parseStatePropsFromExpressions(expr?: string) {
    if (!expr) return;
    expr.match(/state\.\$?\w+/g)?.forEach((name) => {
      const stateProp = name.replace('state.', '');
      this.store.add(stateProp, '', undefined, false);
    });
  }

  parseScheme() {
    const parsedSchemeGroups: SchemeGroup<RawSchemeElement>[] = this.scheme.map(
      (schemeSection: Partial<SchemeSection<RawSchemeElement>>, i) => {
        const emptySchemeSection: SchemeGroup<RawSchemeElement> = {
          content: [],
          collapsed: false,
          title: '',
          id: `section ${i}`,
        };

        if (!schemeSection.content) {
          this.store.add(emptySchemeSection.id, emptySchemeSection.collapsed);
          return emptySchemeSection;
        } else {
          const mergedSchemeSection = {
            ...emptySchemeSection,
            ...schemeSection,
          };
          if (mergedSchemeSection.title.length > 0) {
            mergedSchemeSection.id = mergedSchemeSection.title;
          }
          this.store.add(emptySchemeSection.id, emptySchemeSection.collapsed);
          return mergedSchemeSection;
        }
      },
    );

    const parsedScheme: SchemeParsed = parsedSchemeGroups.map(
      (schemeGroup: SchemeGroup<RawSchemeElement>) => {
        const { content, ...rest } = schemeGroup;
        const newContent = content.map(
          (rawSchemeElement: RawSchemeElement) =>
            new SchemeElement(rawSchemeElement),
        );
        return { content: newContent, ...rest } as SchemeGroup<SchemeElement>;
      },
    );

    parsedScheme.forEach((schemeGroup) => {
      schemeGroup.content.forEach((c) => {
        this.parseSchemeElement(c);
      });
    });

    return parsedScheme;
  }
}
