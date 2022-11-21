export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function colorSelection() {
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
    let randomSelection = random(0, arrayOfColorDigits.length - 1);
    colorSelectionPreparation.push(arrayOfColorDigits[randomSelection]);
  }
  const chooseСolor = colorSelectionPreparation.join("");
  return chooseСolor;
}