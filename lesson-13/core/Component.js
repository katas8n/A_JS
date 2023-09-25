import { isArray, isExisting } from "../util";

export class Component {
  constructor({ tagName = "div", className, children }) {
    const element = document.createElement(tagName);
    className && (element.className = className);

    if (!children || isArray(children)) return element;

    for (const child of children) {
      element.append(child);
    }

    return element;
  }
}

export class AdvancedComponent extends Component {
  constructor({ tagName, className, children, events, html, ...attrs }) {
    super({ tagName, className, children });
    // element here is this
    if (isExisting(attrs)) {
      for (const attr in attrs) {
        this[attr] = attrs[attr];
      }
    }

    isExisting(html) && this.insertAdjacentHTML(html.position, html.text);

    if (!isExisting(events)) return this;

    for (const event in events) {
      this.addEventListener(event.type, event.action);
    }
  }
}
