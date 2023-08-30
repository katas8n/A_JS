import { Component } from "../core/Component";

export class Button extends Component {
  constructor(option) {
    super(option);

    this.tagName = "button";
    this.className = ["button", option.className].join(" ");
  }
}
