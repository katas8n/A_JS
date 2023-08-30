import { Component } from "../core/Component";
import { Button } from "./Button";

export class Keyboard extends Component {
  constructor(option) {
    super(option);

    this.tagName = "div";
    this.className = ["keyboard"];
  }
}
