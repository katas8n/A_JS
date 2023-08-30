import { getKeys } from "../utils/getObjectKeys";
import { isArray } from "../utils/isArray";

export const toHTML = ({
  tagName = "div",
  className,
  children,
  nestedHTML,
  textContent,
  events,
  ...attrs
}) => {
  const element = document.createElement(tagName);
  if (isArray(className)) element.className = className.join(" ");
  element.className = className;

  if (children) {
    element.append(...children);
  }

  if (nestedHTML)
    element.insertAdjacentHTML(nestedHTML.position, nestedHTML.elements);

  if (textContent) element.textContent = textContent;

  if (events) {
    console.log("[events]", events);
    for (const eventName in events) {
      const event = events[eventName];

      element.addEventListener(eventName, event);
    }
  }

  if (getKeys(attrs).length <= 0) return element;
  for (const key in attrs) {
    const value = attrs[key];

    element[key] = value;
  }

  return element;
};
