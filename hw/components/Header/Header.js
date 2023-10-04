import "./Header.css";

import { AdvancedComponent, render, append } from "../../core";

export class Header extends AdvancedComponent {
  constructor({ tagName, className, children, events, html, ...attrs }) {
    super({ tagName, className, children, events, html, ...attrs });
    this.className = "header";
  }
}
