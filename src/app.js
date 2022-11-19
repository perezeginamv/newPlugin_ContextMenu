import "./styles.css";
import { ContextMenu } from "./menu.js";
import {BackgroundModule} from "./modules/background.module.js"

const menu = new ContextMenu('.menu');
const backgroundModule = new BackgroundModule();

menu.add(backgroundModule);