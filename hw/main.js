import { Header, Footer, App } from "./components";
import { AdvancedComponent } from "./core";
import { append, appendMany } from "./core/append";

import "./style.css";

const app = document.getElementById("app");

appendMany(app, [
  new Header({
    tagName: "header",
    children: [new AdvancedComponent({ tagName: "nav" })],
  }),
  new App({ tagName: "div" }),
  new Footer({ tagName: "footer" }),
]);
