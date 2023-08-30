import { Component } from "./core/Component";
import { toHTML } from "./core/render";

import { Button } from "./components/Button";
import { Keyboard } from "./components/Keyboard";
import { Screen } from "./components/Screen";
import { Input } from "./components/Input";

import "./style.css";

const app = document.querySelector("#app");

const inputs = [
  toHTML(
    new Input({
      placeholder: "Type consumers name!",
      className: "additional-class",
      name: "consumer",
      events: {
        change: (e) => {
          console.log("There was change event!");
        },
      },
    })
  ),
  toHTML(
    new Input({
      placeholder: "Message",
      className: "msg",
      name: "msg",
      events: {
        change: (e) => {
          console.log("There was change event on 'msg' element!");
        },
      },
    })
  ),
];

const btn = toHTML(
  new Button({
    textContent: "Send",
    events: {
      click: () => {
        const goalObject = {};

        for (const input of inputs) {
          if (input.name === "consumer") goalObject["consumer"] = input.value;
          if (input.name === "msg") goalObject["msg"] = input.value;
          goalObject["wasSent"] = true;
        }

        console.log("[goalObject]", goalObject);
      },
    },
  })
);

app.append(...inputs);
app.append(btn);
