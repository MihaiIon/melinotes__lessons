declare module '@/models/note-model' {
  export default class NoteModel {
    value: string;
    octave: number;
    scientificPitchNotation: string;
    vexflowNotation: string;

    constructor(value: string, octave?: number);

    static createFromScientificPitchNotation(scientificPitchNotation: string): NoteModel;

    static createFromVexflowNotation(vexflowNotation: string): NoteModel;
  }
}
