import "./styles.css";
import { ContextMenu } from "./menu.js";
import {BackgroundModule} from "./modules/background.module.js"
import {ShapeModule} from "./modules/shape.module.js"

const menu = new ContextMenu('.menu');

const figureСreation = new ShapeModule();
const backgroundModule = new BackgroundModule();

menu.add(figureСreation);
menu.add(backgroundModule);