import { naturalNotesBetween } from "@/music-utilities";
import { randomElement, randomElements } from "@/utilities";

export default class TrebleClefNaturalNoteQuizzGeneratorModel {
  DEFAULT_CHOICE_COUNT = 4;

  generate() {
    const rangeA3toG4 = naturalNotesBetween("A3", "G4");
    const rangeA4toG5 = naturalNotesBetween("A4", "G5");
    const rangeA5toD6 = naturalNotesBetween("A5", "D6");
    const selectedRange = randomElement([rangeA3toG4, rangeA4toG5, rangeA5toD6]);

    const choices = randomElements(selectedRange, this.DEFAULT_CHOICE_COUNT);
    const allChoices = [...rangeA3toG4, ...rangeA4toG5, ...rangeA5toD6];

    return { choices, allChoices };
  }
}
