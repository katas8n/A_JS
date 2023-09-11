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
    this.element.textContent = this.textContent;

    this.html &&
      this.element.insertAdjacentHTML(this.html.position, this.html.text);
    if (this.events) {
      for (const event in this.events) {
        const action = this.events[event];

        this.element.addEventListener(event, action);
      }
    }
    if (this.children) {
      for (const child of this.children) {
        append(child, this.element);
      }
    }

    if (this.attrs) {
      for (const key in this.attrs) {
        const value = this.attrs[key];
        this.element[attr] = value;
      }
    }

    return this.element;
  }
}
