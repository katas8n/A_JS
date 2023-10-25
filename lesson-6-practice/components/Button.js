export class Button {
  constructor({ className, events, textContent, type }) {
    this.tagName = "button";
    this.className = ["btn", className].join("");
    this.events = events;
    this.textContent = textContent;
    this.type = type;
  }
}
