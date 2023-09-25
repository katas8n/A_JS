import { Component } from "../../core/Component";

export class Header extends Component {
  constructor({ tagName, className, children }) {
    super({ tagName, className, children });
    const element = document.createElement("header");

    element.className = "header";

    return element;
  }
}
