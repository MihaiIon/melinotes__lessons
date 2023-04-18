import NoteModel from '@/models/note-model';

const ALL_NATURAL_NOTES = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

export default function naturalNotesBetween(fromScientificPitchNotation: string, toScientificPitchNotation?: string) {
  if (!fromScientificPitchNotation) return [];

  const startNote = NoteModel.createFromScientificPitchNotation(fromScientificPitchNotation);
  if (!toScientificPitchNotation) return [startNote];

  const endNote = NoteModel.createFromScientificPitchNotation(toScientificPitchNotation);
  if (startNote.octave > endNote.octave) return [];
  
  if (startNote.octave === endNote.octave) {
    return getNotesBetween(startNote.value, endNote.value).map((note) => {
      return NoteModel.createFromScientificPitchNotation(`${note}${startNote.octave}`)
    });
  }

  const notes = [];
  for (let i = startNote.octave; i <= endNote.octave; i++) {
    if (i === startNote.octave) {
      notes.push(...getNotesBetween(startNote.value, 'B').map((note) => NoteModel.createFromScientificPitchNotation(`${note}${i}`)));
      continue;
    }
    else if (i === endNote.octave) {
      notes.push(...getNotesBetween('C', endNote.value).map((note) => NoteModel.createFromScientificPitchNotation(`${note}${i}`)));
      continue;
    }
    else {
      notes.push(...ALL_NATURAL_NOTES.map((note) => NoteModel.createFromScientificPitchNotation(`${note}${i}`)));
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
