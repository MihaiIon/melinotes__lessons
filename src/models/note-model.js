export default class NoteModel {
  constructor(value, octave) {
    if(!value) throw new Error("A `value` is required to create a note");

    this.value = value;
    this.octave = octave || 4;
    this.scientificPitchNotation = `${this.value}${this.octave}`;
    this.vexflowNotation = `${this.value.toLowerCase()}/${this.octave}`;
  }

  static createFromScientificPitchNotation(scientificPitchNotation) {
    const noteValueWithoutOctave = scientificPitchNotation.slice(0, -1);
    const noteOctave = parseInt(scientificPitchNotation.slice(-1));

    if(!noteOctave) throw new Error("Invalid scientific pitch notation");
    
    return new NoteModel(noteValueWithoutOctave, noteOctave);
  }

  static createFromVexflowNotation(vexflowNotation) {
    const noteValueWithoutOctave = vexflowNotation.slice(0, 1).toUpperCase();
    const noteOctave = parseInt(vexflowNotation.slice(-1));

    if(!noteOctave) throw new Error("Invalid vexflow notation");
    
    return new NoteModel(noteValueWithoutOctave, noteOctave);
  }
}
