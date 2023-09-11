import { Component } from "../../core/Component";

import "./Button.scss";

export class Button extends Component {
  constructor({
    tagName,
    textContent,
    html,
    className,
    children,
    events,
    ...attrs
  }) {
    super({
      tagName,
      textContent,
      html,
      className,
      children,
      events,
      ...attrs,
    });
    this.tagName = "button";
    this.className = ["btn"];
  }
}
