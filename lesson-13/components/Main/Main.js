import { AdvancedComponent } from "../../core/Component";

export class Main extends AdvancedComponent {
  constructor({ tagName, className, children, events, html, attrs }) {
    super({ tagName, className, children, events, html, attrs });
    const element = document.createElement("main");

    element.className = "main";

    return element;
  }
}
