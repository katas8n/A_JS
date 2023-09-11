import { Component } from "../../core/Component";

import "./Input.scss";

export class Input extends Component {
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

    this.tagName = "input";
    this.className = ["input", className];

    console.log("[this]", this);
  }
}
