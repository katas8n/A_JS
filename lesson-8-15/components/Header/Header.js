import { Component } from "../../core/Component";
import "./Header.scss";

export class Header extends Component {
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
    this.tagName = "header";
    this.className = "header";
  }
}
