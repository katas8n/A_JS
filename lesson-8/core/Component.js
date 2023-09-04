import { append } from "./render";

export class Component {
  constructor({
    tagName,
    textContent,
    html,
    className,
    children,
    events,
    ...attrs
  }) {
    this.tagName = tagName;
    this.textContent = textContent;
    this.html = html;
    this.className = className;

    this.events = events;
    this.attrs = attrs;
    this.children = children ? children : null;
  }

  toHTML() {
    this.element = document.createElement(this.tagName);
    this.element.className = this.className;

    if (this.children) {
      for (const child of this.children) {
        append(child, this.element);
      }
    }

    return this.element;
  }
}
