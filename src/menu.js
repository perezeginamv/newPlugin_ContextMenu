import { Menu } from "./core/menu";
import { Module } from "./core/module";

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
    document.body.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      
      this.el.style.left = event.clientX+ "px";
      if ((window.screen.width-event.clientX)<this.el.clientWidth) {
        this.el.style.left = (event.clientX-this.el.clientWidth)+ "px";
      }    
      this.el.style.top = event.clientY + "px";
      if((window.screen.height-event.clientY)<2*this.el.clientHeight) {
        this.el.style.top = (event.clientY-this.el.clientHeight)+ "px";
      }
      this.open();      
    });
  }

  open() {
    this.el.style.display = "block";
  }
  close() {
    this.el.style.display = "none";
  }

  add(module) {
    if (!(module instanceof Module)) {
      console.error("Cannot add not a Module instance to the context menu");
      return;
    }
 
    this.el.insertAdjacentHTML("beforeEnd", module.toHTML());
    const thisItem = document.querySelector(`[data-type=${module.type}]`);
    thisItem.addEventListener("click", () => {
      module.trigger();
      this.close();
    });
   
  }
}
