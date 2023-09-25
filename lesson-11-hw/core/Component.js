import { isArray } from "../utils/isArray";
import { append, appendMany } from "../utils/append";
import { defineEvent } from "../utils/defineEvent";

export class Component {
  constructor({
    tagName,
    className,
    textContent,
    html,
    children,
    events,
    ...attrs
  }) {
    if (!tagName) return;

    this.tagName = tagName;
    this.className = className;
    if (textContent) this.textContent = textContent;
    this.html = html;
    this.children = children;
    if (events) this.events = events;
    this.attrs = attrs;
  }

  toHTML() {
    const element = document.createElement(this.tagName);
    if (this.className) element.className = this.className;
    if (this.textContent) element.textContent = this.textContent;
    if (this.html) element.insertAdjacentHTML(html.position, html.htmlText);

    if (this.children && this.children.length > 1) {
      appendMany(element, this.children);
    }

    if (this.attrs) {
      for (const attr in this.attrs) {
        const value = this.attrs[attr];

        element[attr] = value;
      }
    }

    console.log("[this.events]", this.events);

    if (!this.events) return element;

    for (const event of this.events) {
      for (const keyOfEvent in event) {
        defineEvent({
          el: element,
          event: keyOfEvent,
          eventFunc: event[keyOfEvent],
        });
      }
    }

    return element;
  }
}
