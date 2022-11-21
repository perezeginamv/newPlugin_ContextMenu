import { Module } from "../core/module";
import { random } from "../utils.js";
import {colorSelection} from "../utils.js";

export class ShapeModule extends Module {
  constructor() {
    super("CreateFigure", "Создать фигуру");
  }  

  drawRectangle() {    
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");    
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
    let width = random(2, canvas.width/2);
    let height = random(2, canvas.height/2);
    let x = random(0, canvas.width - width);
    let y = random(0, canvas.height - height);
    ctx.fillStyle = colorSelection();
    ctx.fillRect(x, y, width, height);
    document.body.append(canvas);
    setTimeout(() => canvas.remove(), 1000);
  }
  drawTriangle () {
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d"); 
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
    ctx.fillStyle = colorSelection();
    ctx.beginPath();
    ctx.moveTo(random(0, canvas.width), random(0, canvas.height-200));
    ctx.lineTo(random(0, canvas.width), random(0, canvas.height-200));
    ctx.lineTo(random(0, canvas.width), random(0, canvas.height-200));
    ctx.fill();
    document.body.append(canvas);
    setTimeout(() => canvas.remove(), 1000);
  }

  drawСircles () {
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d"); 
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
    ctx.fillStyle = colorSelection();
    const radius = random(1, canvas.height/3)
    ctx.beginPath();
    ctx.arc(random(0+radius, canvas.width-radius), random(0+radius, canvas.height-radius), radius, 0, Math.PI*2, true);      
    ctx.fill();
    document.body.append(canvas);
    setTimeout(() => canvas.remove(), 1000);
  }


  trigger() { 
  let lotteryNumber = random (0, 2)
  switch (lotteryNumber) {
    case 0:
      this.drawTriangle ();
      break;
      case 1: 
      this.drawRectangle ()
      break;
      case 2: 
      this.drawСircles ()
      break
  }
  }
}
