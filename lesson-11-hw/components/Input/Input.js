import { Component } from "../../core/Component";
import "./Input.scss";

export class Input extends Component {
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
