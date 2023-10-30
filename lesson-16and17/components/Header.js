import { Button } from "./Button";
import { Component } from "../core";

export class Header extends Component {
  constructor({ tagName, className, children, events, textContent, ...attrs }) {
    super({ tagName, className, children, events, textContent, ...attrs });
    this.setTagName("header");
    this.setClassName("header");
  }
}
