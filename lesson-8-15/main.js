import { Component } from "./core/Component";
import { render } from "./core/render";
import { App } from "./App";
import { Login, Register } from "./screens/index";
import {
  Button,
  Input,
  Keyboard,
  Screen,
  Textarea,
  Header,
  Footer,
  Main,
} from "./components/index";

import { append } from "./core/render";

import "./common/style.scss";

// --------------------------------------

const screens = [
  {
    isActive: false,
    label: "Main",
    component: new Main({
      tagName: "main",
      className: "main",
      html: {
        position: "afterbegin",
        text: "<h2>You are currently in MAIN</h2>",
      },
    }),
  },
  {
    isActive: false,
    label: "Login",
    component: new Login({
      tagName: "main",
      className: "login",
      html: {
        position: "afterbegin",
        text: "<h2>You are currently in Login</h2>",
      },
    }),
  },
  {
    isActive: true,
    label: "Register",
    component: new Register({
      tagName: "main",
      className: "register",
      html: {
        position: "afterbegin",
        text: "<h2>You are currently in Register</h2>",
      },
      children: [
        new Input({
          placeholder: "email",
        }).toHTML(),
        new Input({
          placeholder: "passowrd",
        }).toHTML(),

        new Button({ textContent: "Register" }).toHTML(),
      ],
    }),
  },
];

const root = document.body;

const screen = new Component({
  tagName: "div",
  className: "wrapper",
  children: "",
}).toHTML();

screen.append(screens.filter((el) => el.isActive)[0].component.toHTML());

const header = new Header({
  children: [
    ...screens.map((el) => {
      return new Button({
        tagName: "button",
        className: "btn",
        textContent: el.label,
        events: {
          click: (e) => {
            screens.forEach((el) => {
              if (el.label === e.target.textContent) {
                el.isActive = true;
              } else {
                el.isActive = false;
              }

              return el;
            });

            const newComponent = screens
              .filter((el) => el.isActive)[0]
              .component.toHTML();

            render(newComponent, screen);
          },
        },
      }).toHTML();
    }),
  ],
}).toHTML();

const app = new App({
  tagName: "div",
  className: "app",
  children: [
    header,
    screen,
    new Footer({ tagName: "footer", className: "footer" }).toHTML(),
  ],
}).toHTML();

append(app, root);
