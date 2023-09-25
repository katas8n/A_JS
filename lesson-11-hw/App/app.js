import { Component } from "../core/Component";

export class App extends Component {
  constructor({
    tagName,
    className,
    textContent,
    html,
    children,
    event,
    ...attrs
  }) {
    super({
      tagName,
      className,
      textContent,
      html,
      children,
      event,
      ...attrs,
    });
  }
}
