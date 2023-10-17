import { Component } from "./Component";

export const toHTML = (instance) => {
  if (instance instanceof Component) {
    const { attributes, children, textContent, tagName, className, events } =
      instance;

    const element = document.createElement(tagName);
    element.className = className;
    element.textContent = textContent;
    element.events = events;
    if (!children) return element;

    for (const child of children) {
      if (child instanceof Component) element.append(child.toHTML());
    }

    return element;
  }
  return "There isn't any instance of class Component.";
};
