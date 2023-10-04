import { AdvancedComponent, render, append } from "../../core";

import "./Footer.css";

export class Footer extends AdvancedComponent {
  constructor({ tagName, className, children, events, html, ...attrs }) {
    super({ tagName, className, children, events, html, ...attrs });
  }
}
