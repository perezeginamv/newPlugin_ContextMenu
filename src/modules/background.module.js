import { Module } from "../core/module";
import { random } from "../utils";

export class BackgroundModule extends Module {
  constructor() {
    super("Background", "Поменять цвет фона");
  }

  trigger() {
    const arrayOfColorDigits = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    const colorSelectionPreparation = ["#"];

    for (let i = 1; i < 7; i++) {
      let randomSelection = random(0, (arrayOfColorDigits.length - 1));
      colorSelectionPreparation.push(arrayOfColorDigits[randomSelection]);
    }
    const chooseСolor = colorSelectionPreparation.join("");
    document.body.style.background = chooseСolor;
  }
}
