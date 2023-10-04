import { AdvancedComponent, render, append } from "../../core";

export class App extends AdvancedComponent {
  constructor({ tagName, className, children, events, html, ...attrs }) {
    super({ tagName, className, children, events, html, ...attrs });
    this.className = "app";
  }
}
