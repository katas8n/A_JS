import { Component } from "../../core/Component";

import "./Button.scss";

export class Button extends Component {
  constructor({
    tagName,
    className,
    textContent,
    html,
    children,
    event,
    ...attrs
  }) {
    super({ tagName, className, textContent, html, children, event, ...attrs });
  }
}
