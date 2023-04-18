export default class NoteModel {
  static SCIENTIFIC_PITCH_NOTATION_ERROR_MESSAGE: string = Object.freeze("Invalid scientific pitch notation");
  static VEXFLOW_NOTATION_ERROR_MESSAGE: string = Object.freeze("Invalid vexflow notation");

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

    if(!noteOctave) throw new Error(NoteModel.SCIENTIFIC_PITCH_NOTATION_ERROR_MESSAGE);
    
    return new NoteModel(noteValueWithoutOctave, noteOctave);
  }

  static createFromVexflowNotation(vexflowNotation: string): NoteModel {
    const noteValueWithoutOctave: string = vexflowNotation.slice(0, 1).toUpperCase();
    const noteOctave: number = parseInt(vexflowNotation.slice(-1));

    if(!noteOctave) throw new Error(NoteModel.VEXFLOW_NOTATION_ERROR_MESSAGE);
    
    return new NoteModel(noteValueWithoutOctave, noteOctave);
  }
}
