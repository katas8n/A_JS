import { Component } from "../../core/Component";

import "./Screen.scss";

export class Screen extends Component {
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
