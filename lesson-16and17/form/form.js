import { Button, Input } from "../components";

const COMMON_INPUTS = [
  new Input({
    name: "email",
    placeholder: "Email",
  }).toHTML(),
  new Input({
    name: "password",
    placeholder: "Password",
    type: "password",
  }).toHTML(),
];

export class Form {
  constructor(mode) {
    this.element = document.createElement("form");
    this.element.className = "form";

    this.element.append(...COMMON_INPUTS);

    if (mode === "reg") {
      this.element.append(
        new Input({
          placeholder: "Confirm password",
          type: "password",
        }).toHTML()
      );
    }

    this.element.append(
      new Button({
        textContent: mode === "auth" ? "Login" : "Register",
        events: {
          click: (e) => {
            console.log(e);
            e.preventDefault();
          },
        },
      }).toHTML()
    );

    console.log("[this.element]", this.element);

    return this.element;
  }
}
