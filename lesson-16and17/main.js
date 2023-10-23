import {
  Component,
  toHTML,
  appendElement,
  appendElements,
  render,
} from "./core";

import { Megapolice, BaseCity, Human } from "./classes";

import { App as Application, Header, Footer, Main } from "./components";

import { getElementByClassName } from "./utils/getElementByClassName";
import { getRandomNumber } from "./utils/getRandomNumber";

import { PERSON_BY_DEFAULT } from "./default";

import "./style.css";

const root = document.querySelector("#app");

const app = new Application({});

app.addChildren([new Header({}), new Main({}), new Footer({})]);

const App = app.toHTML();

const [header, main, footer] = App.children;
const randomPersonIndex = getRandomNumber(PERSON_BY_DEFAULT.length);

const player = PERSON_BY_DEFAULT[randomPersonIndex];

appendElement(
  main,
  new Component({
    tagName: "div",
    className: "person",
    html: `
    <h2 class='person-data'>Name : ${player.getName()}</h2>
    <h3 class='person-data'>Age : ${player.getAge()}</h3>
    <h3 class='person-data'>Salary : ${player.getSalary()}</h3>
    <h3 class='person-data'>Balance : ${player.getBalance()}</h3>
    <h3 class='person-data'>Balance : ${
      player.getJob() ? player.getJob() : "There is nothing here yet"
    }</h3>
    <h3 class='person-data'>Relations : ${
      player.getRel() ? player.getRel() : "Single"
    }</h3>

    <div class="person-img-wrapper">
        <img class='person-img' src="${player.getAvatar()}"/> 
    </div>
    `,
  }).toHTML()
);

appendElement(root, App);
