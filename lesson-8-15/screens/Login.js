import { Component } from "../core/Component";

export class Login extends Component {
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
