import { appendElement, render } from "./core";
import { store } from "./store";

import { Megapolice, BaseCity, Human } from "./classes";

import { Form } from "./form/form";
import { App as Application, Header, Footer, Main, Button } from "./components";

import { getRandomNumber } from "./utils/getRandomNumber";

import { PERSON_BY_DEFAULT } from "./default";

import "./style.css";

const app = new Application({ id: "app" });
app.addChildren([new Header({}), new Main({}), new Footer({})]);

const App = app.toHTML();
const [header, main, footer] = App.children;

const links = [
  {
    textContent: "About us",
    source: "#",
  },
  {
    textContent: !store.isRegistered ? "Register" : "Login",
    source: "#",
    event: {
      click: (e) => {
        console.log("[store.isRegistered ]", store.isRegistered);
      },
    },
  },
];

const linksComponent = links.map((link) => {
  return new Button({
    className: "header-nav",
    textContent: link.textContent,
    href: link.source,
    events: {
      click: (e) => {
        console.log(e);
        render(main, new Form(!store.isRegistered ? "reg" : null));
        store.isRegistered = !store.isRegistered;
        e.target.textContent = !store.isRegistered ? "Register" : "Login";
      },
    },
  }).toHTML();
});

header.append(...linksComponent);

const randomPersonIndex = getRandomNumber(PERSON_BY_DEFAULT.length);

const player = PERSON_BY_DEFAULT[randomPersonIndex];

// appendElement(
//   main,
//   new Component({
//     tagName: "div",
//     className: "person",
//     html: `
//     <h2 class='person-data'>Name : ${player.getName()}</h2>
//     <h3 class='person-data'>Age : ${player.getAge()}</h3>
//     <h3 class='person-data'>Salary : ${player.getSalary()}</h3>
//     <h3 class='person-data'>Balance : ${player.getBalance()}</h3>
//     <h3 class='person-data'>Balance : ${
//       player.getJob() ? player.getJob() : "There is nothing here yet"
//     }</h3>
//     <h3 class='person-data'>Relations : ${
//       player.getRel() ? player.getRel() : "Single"
//     }</h3>

//     <div class="person-img-wrapper">
//         <img class='person-img' src="${player.getAvatar()}"/>
//     </div>
//     `,
//   }).toHTML()
// );

appendElement(document.body, App);
