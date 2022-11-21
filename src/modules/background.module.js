import { Module } from "../core/module";
import {colorSelection} from "../utils"

export class BackgroundModule extends Module {
  constructor() {
    super("Background", "Поменять цвет фона");
  }

  trigger() {
    document.body.style.background = colorSelection();
   
  }
}
