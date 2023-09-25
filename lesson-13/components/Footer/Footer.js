import { Component } from "../../core/Component";

export class Footer extends Component {
  constructor({ tagName, className, children }) {
    super({ tagName, className, children });
    const element = document.createElement("footer");

    element.className = "footer";

    return element;
  }
}
