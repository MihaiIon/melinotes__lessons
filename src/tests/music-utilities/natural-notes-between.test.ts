import { naturalNotesBetween } from "@/music-utilities";

import NoteModel from "@/models/note-model";

describe("naturalNotesBetween", () => {
  describe('when providing only the starting note', () => {
    it('should return only that note', () => {
      const notes = naturalNotesBetween("C4");
      expect(notes.length).toBe(1);
      
      const note = notes[0];
      expect(note).toBeInstanceOf(NoteModel);
      expect(note.value).toBe("C");
      expect(note.scientificPitchNotation).toBe("C4");
      expect(note.vexflowNotation).toBe("c/4");
    });

    describe('when the starting note is not a valid scientific pitch notation', () => {
      it('should throw an error describing that the starting note must be a valid scientific pitch notation value', () => {
        expect(() => naturalNotesBetween("C")).toThrowError(NoteModel.SCIENTIFIC_PITCH_NOTATION_ERROR_MESSAGE);
      });
    });

    describe('when the starting note is not a natural note', () => {
      it('should throw an error describing that the starting note must be a natural note', () => {
        expect(() => naturalNotesBetween("C#4")).toThrowError("'C#' is not a natural note");
      });
    });
  });

  describe('when providing the starting note and the ending note', () => {
    it('should return only the notes between the starting note and the ending note (including the ending note)', () => {
      const notes = naturalNotesBetween("C4", "E4");
      expect(notes.length).toBe(3);
      
      const note1 = notes[0];
      expect(note1).toBeInstanceOf(NoteModel);
      expect(note1.value).toBe("C");
      expect(note1.scientificPitchNotation).toBe("C4");
      expect(note1.vexflowNotation).toBe("c/4");
      
      const note2 = notes[1];
      expect(note2).toBeInstanceOf(NoteModel);
      expect(note2.value).toBe("D");
      expect(note2.scientificPitchNotation).toBe("D4");
      expect(note2.vexflowNotation).toBe("d/4");
      
      const note3 = notes[2];
      expect(note3).toBeInstanceOf(NoteModel);
      expect(note3.value).toBe("E");
      expect(note3.scientificPitchNotation).toBe("E4");
      expect(note3.vexflowNotation).toBe("e/4");
    });

    describe('when the ending note is not a valid scientific pitch notation', () => {
      it('should throw an error describing that the ending note must be a valid scientific pitch notation value', () => {
        expect(() => naturalNotesBetween("C4", "F")).toThrowError(NoteModel.SCIENTIFIC_PITCH_NOTATION_ERROR_MESSAGE);
      });
    });

    describe('when the ending note is not a natural note', () => {
      it('should throw an error describing that the ending note must be a natural note', () => {
        expect(() => naturalNotesBetween("C4", "Eb4")).toThrowError("'Eb' is not a natural note");
      });
    });
  });

  describe('when providing the starting note and the ending note (more than one octave)', () => {
    it('should return only the notes between the starting note and the ending note (including the ending note)', () => {
      const notes = naturalNotesBetween("D4", "E5");
      expect(notes.length).toBe(9);
      
      const note1 = notes[0];
      expect(note1).toBeInstanceOf(NoteModel);
      expect(note1.value).toBe("D");
      expect(note1.scientificPitchNotation).toBe("D4");
      expect(note1.vexflowNotation).toBe("d/4");

      const note2 = notes[1];
      expect(note2).toBeInstanceOf(NoteModel);
      expect(note2.value).toBe("E");
      expect(note2.scientificPitchNotation).toBe("E4");
      expect(note2.vexflowNotation).toBe("e/4");

      const note3 = notes[2];
      expect(note3).toBeInstanceOf(NoteModel);
      expect(note3.value).toBe("F");
      expect(note3.scientificPitchNotation).toBe("F4");
      expect(note3.vexflowNotation).toBe("f/4");

      const note4 = notes[3];
      expect(note4).toBeInstanceOf(NoteModel);
      expect(note4.value).toBe("G");
      expect(note4.scientificPitchNotation).toBe("G4");
      expect(note4.vexflowNotation).toBe("g/4");

      const note5 = notes[4];
      expect(note5).toBeInstanceOf(NoteModel);
      expect(note5.value).toBe("A");
      expect(note5.scientificPitchNotation).toBe("A4");
      expect(note5.vexflowNotation).toBe("a/4");

      const note6 = notes[5];
      expect(note6).toBeInstanceOf(NoteModel);
      expect(note6.value).toBe("B");
      expect(note6.scientificPitchNotation).toBe("B4");
      expect(note6.vexflowNotation).toBe("b/4");

      const note7 = notes[6];
      expect(note7).toBeInstanceOf(NoteModel);
      expect(note7.value).toBe("C");
      expect(note7.scientificPitchNotation).toBe("C5");
      expect(note7.vexflowNotation).toBe("c/5");

      const note8 = notes[7];
      expect(note8).toBeInstanceOf(NoteModel);
      expect(note8.value).toBe("D");
      expect(note8.scientificPitchNotation).toBe("D5");
      expect(note8.vexflowNotation).toBe("d/5");

      const note9 = notes[8];
      expect(note9).toBeInstanceOf(NoteModel);
      expect(note9.value).toBe("E");
      expect(note9.scientificPitchNotation).toBe("E5");
      expect(note9.vexflowNotation).toBe("e/5");
    });

    describe('when the starting octave is higher than the ending octave', () => {
      it("should return an empty array", () => {
        const notes = naturalNotesBetween("E5", "D4");
        expect(notes.length).toBe(0);
      });
    });
  });
});
