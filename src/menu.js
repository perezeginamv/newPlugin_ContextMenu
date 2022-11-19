import { Menu } from "./core/menu";
import { Module } from "./core/module";

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
    document.body.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      this.el.style.left = event.clientX + "px";
      this.el.style.top = event.clientY + "px";
      this.open();
    });
  }

  open() {
    this.el.style.display = "block";
    console.log("Ура");
  }
  close() {
    this.el.style.display = "none";
  }

  add(module) {
    if (!(module instanceof Module)) {
      console.error("Cannot add not a Module instance to the context menu");
      return;
    }
    this.el.innerHTML = module.toHTML();
    const thisItem = document.querySelector(".menu-item");
    thisItem.addEventListener("click", () => {
      module.trigger();
      this.close();
    });

  }
}
