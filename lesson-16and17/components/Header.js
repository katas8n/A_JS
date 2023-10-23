import { Component, toHTML } from "../core";
import { render } from "../core/render";

const links = [
  {
    textContent: "About us",
    source: "#",
  },
  {
    textContent: "Login",
    source: "#",
  },
];

const linksComponent = links.map((link) => {
  return new Component({
    tagName: "a",
    className: "header-link",
    textContent: link.textContent,
    href: link.source,
    events: {
      click: (e) => {
        console.log("[e.target]", e.target);
      },
    },
  });
});

export class Header extends Component {
  constructor({ tagName, className, children, events, textContent, ...attrs }) {
    super({ tagName, className, children, events, textContent, ...attrs });
    this.setTagName("header");
    this.setClassName("header");
    this.setChildren(linksComponent);
  }
}
