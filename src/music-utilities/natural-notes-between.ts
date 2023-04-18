import NoteModel from '@/models/note-model';

const ALL_NATURAL_NOTES = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

export default function naturalNotesBetween(fromStaffNotationValue: string, toStaffNotationValue?: string) {
  if (!fromStaffNotationValue) return [];

  if (!toStaffNotationValue) return [createNoteFromScientificPitchNotation(fromStaffNotationValue)];

  const startingOctave = +fromStaffNotationValue.slice(-1);
  const endingOctave = +toStaffNotationValue.slice(-1);

  if (startingOctave > endingOctave) return [];
  
  const startingNote = fromStaffNotationValue.slice(0, -1);
  const endingNote = toStaffNotationValue.slice(0, -1);

  if (startingOctave === endingOctave) {
    return getNotesBetween(startingNote, endingNote).map((note) => createNoteFromScientificPitchNotation(`${note}${startingOctave}`));
  }

  const notes = [];
  for (let i = startingOctave; i <= endingOctave; i++) {
    if (i === startingOctave) {
      notes.push(...getNotesBetween(startingNote, 'B').map((note) => createNoteFromScientificPitchNotation(`${note}${i}`)));
      continue;
    }
    else if (i === endingOctave) {
      notes.push(...getNotesBetween('C', endingNote).map((note) => createNoteFromScientificPitchNotation(`${note}${i}`)));
      continue;
    }
    else {
      notes.push(...ALL_NATURAL_NOTES.map((note) => createNoteFromScientificPitchNotation(`${note}${i}`)));
      continue;
    }
  }

  return notes;
};

function getNotesBetween(startingNote: string, endingNote: string) {
  const startingNoteIndex = ALL_NATURAL_NOTES.indexOf(startingNote);
  const endingNoteIndex = ALL_NATURAL_NOTES.indexOf(endingNote);

  if (startingNoteIndex === endingNoteIndex) {
    return [startingNote];
  }

  return ALL_NATURAL_NOTES.slice(startingNoteIndex, endingNoteIndex + 1);
}

function createNoteFromScientificPitchNotation(staffNotationValue: string) {
  return NoteModel.createFromScientificPitchNotation(staffNotationValue);
}
