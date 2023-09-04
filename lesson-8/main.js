import { App } from "./App";
import {
  Button,
  Input,
  Keyboard,
  Screen,
  Textarea,
  Header,
  Footer,
  Main,
} from "./components/index";

import { append } from "./core/render";

import "./common/style.scss";

// --------------------------------------

const root = document.body;

const app = new App({
  tagName: "div",
  className: "app",
  children: [
    new Header({}).toHTML(),
    new Main({ tagName: "main", className: "main" }),
    new Main({ tagName: "footer", className: "footer" }),
  ],
}).toHTML();

console.log(app);

append(app, root);
