export default class NoteModel {
  static ALL_NATURAL_NOTES: readonly string[] = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

  static SCIENTIFIC_PITCH_NOTATION_REGEX: RegExp = /^[A-G](b|#)?[0-9]$/;

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
    if(!NoteModel.SCIENTIFIC_PITCH_NOTATION_REGEX.test(scientificPitchNotation)) {
      throw new Error(NoteModel.SCIENTIFIC_PITCH_NOTATION_ERROR_MESSAGE);
    }
    
    const noteValue: string = scientificPitchNotation.slice(0, -1);
    const noteOctave: number = parseInt(scientificPitchNotation.slice(-1));
    
    return new NoteModel(noteValue, noteOctave);
  }

  static createFromVexflowNotation(vexflowNotation: string): NoteModel {
    const noteValue: string = vexflowNotation.slice(0, 1).toUpperCase();
    const noteOctave: number = parseInt(vexflowNotation.slice(-1));

    if(!noteOctave) throw new Error(NoteModel.VEXFLOW_NOTATION_ERROR_MESSAGE);
    
    return new NoteModel(noteValue, noteOctave);
  }
}
