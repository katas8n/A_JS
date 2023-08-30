import { Component } from "../core/Component";

export class Screen extends Component {
  constructor(option) {
    super(option);
    this.tagName = "textarea";
    this.disabled = "true";
  }
}
