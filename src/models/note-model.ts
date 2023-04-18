export default class NoteModel {
  value: string;
  octave: number;
  scientificPitchNotation: string;
  vexflowNotation: string;

  constructor(value: string, octave: number = 4) {
    if(!value) throw new Error("A `value` is required to create a note");

    this.value = value;
    this.octave = octave;
    this.scientificPitchNotation = `${this.value}${this.octave}`;
    this.vexflowNotation = `${this.value.toLowerCase()}/${this.octave}`;
  }

  static createFromScientificPitchNotation(scientificPitchNotation: string): NoteModel {
    const noteValueWithoutOctave: string = scientificPitchNotation.slice(0, -1);
    const noteOctave: number = parseInt(scientificPitchNotation.slice(-1));

    if(!noteOctave) throw new Error("Invalid scientific pitch notation");
    
    return new NoteModel(noteValueWithoutOctave, noteOctave);
  }

  static createFromVexflowNotation(vexflowNotation: string): NoteModel {
    const noteValueWithoutOctave: string = vexflowNotation.slice(0, 1).toUpperCase();
    const noteOctave: number = parseInt(vexflowNotation.slice(-1));

    if(!noteOctave) throw new Error("Invalid vexflow notation");
    
    return new NoteModel(noteValueWithoutOctave, noteOctave);
  }
}
