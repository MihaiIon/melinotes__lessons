import Model from "@/models/note-model";

describe("NoteModel", () => {
  describe("when creating a note without parameters", () => {
    it("should throw an error describing that a value is required", () => {
      expect(() => new Model()).toThrowError("A `value` is required to create a note");
    });
  });

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
    describe("when providing a valid scientific pitch notation", () => {
      it("should create a note with the value and the octave", () => {
        const note = Model.createFromScientificPitchNotation("C5");
        expect(note.value).toBe("C");
        expect(note.octave).toBe(5);
        expect(note.scientificPitchNotation).toBe("C5");
        expect(note.vexflowNotation).toBe("c/5");
      });
    });

    describe("when providing an invalid scientific pitch notation", () => {
      it("should throw an error", () => {
        expect(() => Model.createFromScientificPitchNotation("C")).toThrowError("Invalid scientific pitch notation");
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
