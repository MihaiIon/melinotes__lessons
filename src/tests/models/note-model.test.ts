import Model from "@/models/note-model";

describe("NoteModel", () => {
  describe("when creating a note with a value, but without specifying the octave", () => {
    it("should create a note with the octave set to 4", () => {
      const note = new Model("C");
      expect(note.value).toBe("C");
      expect(note.octave).toBe(4);
      expect(note.scientificPitchNotation).toBe("C4");
      expect(note.vexflowNotation).toBe("c/4");
    });
  });

  describe("when creating a note with a value and an octave", () => {
    it("should create a note with the value and the octave", () => {
      const note = new Model("C", 5);
      expect(note.value).toBe("C");
      expect(note.octave).toBe(5);
      expect(note.scientificPitchNotation).toBe("C5");
      expect(note.vexflowNotation).toBe("c/5");
    });
  });

  describe(".createFromScientificPitchNotation", () => {
    describe("when providing a valid scientific pitch notation (natural note)", () => {
      it("should create a note with the value and the octave", () => {
        const note = Model.createFromScientificPitchNotation("C5");
        expect(note.value).toBe("C");
        expect(note.octave).toBe(5);
        expect(note.scientificPitchNotation).toBe("C5");
        expect(note.vexflowNotation).toBe("c/5");
      });
    });

    describe("when providing a valid scientific pitch notation (flat note)", () => {
      it("should create a note with the value and the octave", () => {
        const note = Model.createFromScientificPitchNotation("Bb4");
        expect(note.value).toBe("Bb");
        expect(note.octave).toBe(4);
        expect(note.scientificPitchNotation).toBe("Bb4");
        expect(note.vexflowNotation).toBe("bb/4");
      });
    });

    describe("when providing a valid scientific pitch notation (sharp note)", () => {
      it("should create a note with the value and the octave", () => {
        const note = Model.createFromScientificPitchNotation("F#3");
        expect(note.value).toBe("F#");
        expect(note.octave).toBe(3);
        expect(note.scientificPitchNotation).toBe("F#3");
        expect(note.vexflowNotation).toBe("f#/3");
      });
    });

    describe("when providing an invalid scientific pitch notation (first letter is lower case)", () => {
      it("should throw an error", () => {
        expect(() => Model.createFromScientificPitchNotation("c")).toThrowError(Model.SCIENTIFIC_PITCH_NOTATION_ERROR_MESSAGE);
      });
    });

    describe("when providing an invalid scientific pitch notation (does not start with a letter)", () => {
      it("should throw an error", () => {
        expect(() => Model.createFromScientificPitchNotation("123")).toThrowError(Model.SCIENTIFIC_PITCH_NOTATION_ERROR_MESSAGE);
      });
    });

    describe("when providing an invalid scientific pitch notation (unknown symbol)", () => {
      it("should throw an error", () => {
        expect(() => Model.createFromScientificPitchNotation("C$4")).toThrowError(Model.SCIENTIFIC_PITCH_NOTATION_ERROR_MESSAGE);
      });
    });
    
    describe("when providing an invalid scientific pitch notation (missing octave)", () => {
      it("should throw an error", () => {
        expect(() => Model.createFromScientificPitchNotation("C")).toThrowError(Model.SCIENTIFIC_PITCH_NOTATION_ERROR_MESSAGE);
      });
    });

    describe("when providing an invalid scientific pitch notation (negative octave)", () => {
      it("should throw an error", () => {
        expect(() => Model.createFromScientificPitchNotation("C-4")).toThrowError(Model.SCIENTIFIC_PITCH_NOTATION_ERROR_MESSAGE);
      });
    });

    describe("when providing an invalid scientific pitch notation (double digit octave)", () => {
      it("should throw an error", () => {
        expect(() => Model.createFromScientificPitchNotation("C44")).toThrowError(Model.SCIENTIFIC_PITCH_NOTATION_ERROR_MESSAGE);
      });
    });
  });

  describe(".createFromVexflowNotation", () => {
    describe("when providing a valid vexflow notation", () => {
      it("should create a note with the value and the octave", () => {
        const note = Model.createFromVexflowNotation("c/5");
        expect(note.value).toBe("C");
        expect(note.octave).toBe(5);
        expect(note.scientificPitchNotation).toBe("C5");
        expect(note.vexflowNotation).toBe("c/5");
      });
    });

    describe("when providing an invalid vexflow notation", () => {
      it("should throw an error", () => {
        expect(() => Model.createFromVexflowNotation("c")).toThrowError("Invalid vexflow notation");
      });
    });
  });
});
