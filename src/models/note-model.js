export default class NoteModel {
  constructor(value, staffNotationValue) {
    this.value = value;
    this.staffNotationValue = staffNotationValue;
  }

  static createNoteFromStaffNotationValue(value) {
    const noteValueWithoutOctave = value.slice(0, -1);
    const noteStaffNotationValue = value;
    
    return new NoteModel(noteValueWithoutOctave, noteStaffNotationValue);
  }
}
