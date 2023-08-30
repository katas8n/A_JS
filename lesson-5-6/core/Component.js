import { toHTML } from "./render";
import { getKeys } from "../utils/getObjectKeys";
import { isArray } from "../utils/isArray";

export class Component {
  constructor({
    tagName = "div",
    className = [],
    children,
    nestedHTML,
    textContent,
    events,
    ...attrs
  }) {
    if (!tagName) return;

    this.tagName = tagName;

    if (isArray(className)) this.className = className.join(" ");
    this.className = className;

    if (textContent) this.textContent = textContent;
    if (children) {
      this.children = [];

      for (const child of children) {
        const elem = toHTML(child);

        this.children.push(elem);
      }
    }
    if (nestedHTML) this.nestedHTML = nestedHTML;
    if (events) this.events = events;

    if (getKeys(attrs).length <= 0) return this;

    for (const key in attrs) {
      const value = attrs[key];

      this[key] = value;
    }
  }
}
