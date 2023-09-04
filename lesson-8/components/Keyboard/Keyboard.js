import { Component } from "../../core/Component";

import "./Keyboard.scss";

export class Keyboard extends Component {
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
  }
}
