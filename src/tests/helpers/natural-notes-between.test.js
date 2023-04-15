import { naturalNotesBetween } from "@/helpers";

import NoteModel from "@/models/note-model";

describe("naturalNotesBetween", () => {
  describe("when providing no paramaters", () => {
    it("should return an empty array", () => {
      const notes = naturalNotesBetween();
      expect(notes.length).toBe(0);
    });
  });

  describe('when providing only the starting note', () => {
    it('should return only that note', () => {
      const notes = naturalNotesBetween("C4");
      expect(notes.length).toBe(1);
      
      const note = notes[0];
      expect(note).toBeInstanceOf(NoteModel);
      expect(note.value).toBe("C");
      expect(note.staffNotationValue).toBe("C4");
    });
  });

  describe('when providing the starting note and the ending note', () => {
    it('should return only the notes between the starting note and the ending note (including the ending note)', () => {
      const notes = naturalNotesBetween("C4", "E4");
      expect(notes.length).toBe(3);
      
      const note1 = notes[0];
      expect(note1).toBeInstanceOf(NoteModel);
      expect(note1.value).toBe("C");
      expect(note1.staffNotationValue).toBe("C4");
      
      const note2 = notes[1];
      expect(note2).toBeInstanceOf(NoteModel);
      expect(note2.value).toBe("D");
      expect(note2.staffNotationValue).toBe("D4");
      
      const note3 = notes[2];
      expect(note3).toBeInstanceOf(NoteModel);
      expect(note3.value).toBe("E");
      expect(note3.staffNotationValue).toBe("E4");
    });
  });

  describe('when providing the starting note and the ending note (more than one octave)', () => {
    it('should return only the notes between the starting note and the ending note (including the ending note)', () => {
      const notes = naturalNotesBetween("D4", "E5");
      expect(notes.length).toBe(9);
      
      const note1 = notes[0];
      expect(note1).toBeInstanceOf(NoteModel);
      expect(note1.value).toBe("D");
      expect(note1.staffNotationValue).toBe("D4");

      const note2 = notes[1];
      expect(note2).toBeInstanceOf(NoteModel);
      expect(note2.value).toBe("E");
      expect(note2.staffNotationValue).toBe("E4");

      const note3 = notes[2];
      expect(note3).toBeInstanceOf(NoteModel);
      expect(note3.value).toBe("F");
      expect(note3.staffNotationValue).toBe("F4");

      const note4 = notes[3];
      expect(note4).toBeInstanceOf(NoteModel);
      expect(note4.value).toBe("G");
      expect(note4.staffNotationValue).toBe("G4");

      const note5 = notes[4];
      expect(note5).toBeInstanceOf(NoteModel);
      expect(note5.value).toBe("A");
      expect(note5.staffNotationValue).toBe("A4");

      const note6 = notes[5];
      expect(note6).toBeInstanceOf(NoteModel);
      expect(note6.value).toBe("B");
      expect(note6.staffNotationValue).toBe("B4");

      const note7 = notes[6];
      expect(note7).toBeInstanceOf(NoteModel);
      expect(note7.value).toBe("C");
      expect(note7.staffNotationValue).toBe("C5");

      const note8 = notes[7];
      expect(note8).toBeInstanceOf(NoteModel);
      expect(note8.value).toBe("D");
      expect(note8.staffNotationValue).toBe("D5");

      const note9 = notes[8];
      expect(note9).toBeInstanceOf(NoteModel);
      expect(note9.value).toBe("E");
      expect(note9.staffNotationValue).toBe("E5");
    });

    describe('when the starting octave is higher than the ending octave', () => {
      it("should return an empty array", () => {
        const notes = naturalNotesBetween("E5", "D4");
        expect(notes.length).toBe(0);
      });
    });
  });
});
