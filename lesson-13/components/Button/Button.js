import { AdvancedComponent } from "../../core/Component";

export class Button extends AdvancedComponent {
  constructor({ tagName, className, children, textContent }) {
    super({ tagName, className, children });
    const element = document.createElement("button");
    element.textContent = textContent;

    element.className = "button";

    return element;
  }
}
