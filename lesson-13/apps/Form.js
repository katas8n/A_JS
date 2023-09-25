import { AdvancedComponent } from "../core/Component";
import { Input, Button } from "../components";

export class Form extends AdvancedComponent {
  constructor({
    isRegistered,
    tagName,
    className,
    children,
    events,
    html,
    ...attrs
  }) {
    super({
      tagName,
      className,
      children,
      events,
      html,
      ...attrs,
    });

    const element = document.createElement("form");

    element.className = ["form", isRegistered ? "--login" : "--register"].join(
      ""
    );

    element.append(
      new Input({
        className: "--login",
        attrs: {
          placeholder: "login",
          name: "login",
        },
      }),
      new Input({
        className: "--login",
        attrs: {
          placeholder: "login",
          name: "login",
        },
      }),
      new Button({
        textContent: "Send",
        events: {
          click: (e) => {},
        },
      })
    );

    return element;
  }
}
