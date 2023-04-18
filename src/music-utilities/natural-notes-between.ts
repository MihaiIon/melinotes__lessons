import NoteModel from '@/models/note-model';

export default function naturalNotesBetween(fromScientificPitchNotation: string, toScientificPitchNotation?: string) {
  const startNote = NoteModel.createFromScientificPitchNotation(fromScientificPitchNotation);
  validateNaturalNote(startNote.value);
  
  const endNote = toScientificPitchNotation ? NoteModel.createFromScientificPitchNotation(toScientificPitchNotation) : null;
  if(endNote) validateNaturalNote(endNote.value);

  if (!endNote) return [startNote];

  if (startNote.octave > endNote.octave) return [];

  if (startNote.octave === endNote.octave) {
    return getNotesBetween(startNote.value, endNote.value, startNote.octave);
  }

  const notes: NoteModel[] = getNotesBetween(startNote.value, 'B', startNote.octave);
  for (let i = startNote.octave + 1; i < endNote.octave; i++) {
    notes.push(...getNotesBetween('C', 'B', i));
  }
  notes.push(...getNotesBetween('C', endNote.value, endNote.octave));

  return notes;
}

function getNotesBetween(startingNote: string, endingNote: string, octave: number) {
  const startingNoteIndex = NoteModel.ALL_NATURAL_NOTES.indexOf(startingNote);
  const endingNoteIndex = NoteModel.ALL_NATURAL_NOTES.indexOf(endingNote);

  if (startingNoteIndex === endingNoteIndex) {
    return [NoteModel.createFromScientificPitchNotation(`${startingNote}${octave}`)];
  }

  return NoteModel.ALL_NATURAL_NOTES
    .slice(startingNoteIndex, endingNoteIndex + 1)
    .map((note) => NoteModel.createFromScientificPitchNotation(`${note}${octave}`));
}

function validateNaturalNote(note: string) {
  if (!NoteModel.ALL_NATURAL_NOTES.includes(note)) {
    throw new Error(`'${note}' is not a natural note`);
  }
}
