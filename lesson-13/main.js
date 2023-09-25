import { Component, AdvancedComponent } from "./core/Component";

import { Form } from "./apps/Form";
import { Header, Main, Footer } from "./components";
import { append } from "./core/append";

import "./style.scss";

append(
  document.getElementsByTagName("body")[0],
  new AdvancedComponent({
    tagName: "div",
    id: "app",
    children: [
      new Header({}),
      // new append()
      new Footer({}),
    ],
  })
);
