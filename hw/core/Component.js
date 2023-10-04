import { isArray, isExisting } from "../util";
import { append, appendMany } from "./append";

export class Component {
  constructor({ tagName = "div", className, children }) {
    const element = document.createElement(tagName);
    className && (element.className = className);

    if (!children || isArray(children)) return element;

    appendMany(element, children);

    return element;
  }
}

export class AdvancedComponent extends Component {
  constructor({ tagName, className, children, events, html, ...attrs }) {
    super({ tagName, className, children });

    if (isExisting(attrs)) {
      for (const attr in attrs) {
        this[attr] = attrs[attr];
      }
    }

    isExisting(html) && this.insertAdjacentHTML(html.position, html.text);

    isArray(children) && appendMany(this, children);

    if (!isExisting(events)) return this;

    for (const event in events) {
      this.addEventListener(event.type, event.action);
    }
  }
}
