import { Component, toHTML } from "../core";

export class Footer extends Component {
  constructor({ tagName, className, children, events, textContent, ...attrs }) {
    super({ tagName, className, children, events, textContent, ...attrs });
    this.setTagName("footer");
    this.setClassName("footer");
  }
}

export default Footer;
