
type ReadonlyDictionary<T> = { readonly [key: string]: T };
type ReadonlyStringDictionary = ReadonlyDictionary<string>;

export const CLEF_TYPES: ReadonlyStringDictionary = Object.freeze({
  TREBLE: 'treble',
  BASS: 'bass',
});
