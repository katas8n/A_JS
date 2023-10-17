// import {
//   Component,
//   toHTML,
//   appendElement,
//   appendElements,
//   render,
// } from "./core";

// import { Megapolice, BaseCity } from "./classes";

// import { getElementByClassName } from "./utils/getElement";

// import { App as Application, Header, Footer, Main } from "./components";

// const root = document.querySelector("#app");

// const app = new Application({});
// const header = new Header({
//   children: [new Component({ tagName: "nav", className: "nav" })],
// });
// const footer = new Footer({});
// const main = new Main({
//   children: [
//     new Component({
//       tagName: "h1",
//       className: "title",
//       textContent: "It works !",
//     }),
//   ],
// });

// app.addChildren([header, main, footer]);

// const App = app.toHTML();

// const htmlMain = getElementByClassName(App, main.className);

// setTimeout(() => {
//   render(
//     htmlMain,
//     new Component({
//       tagName: "h1",
//       textContent: "Goodbye!",
//     }).toHTML()
//   );
// }, 2000);

// appendElement(root, App);

// ! Async JS
// setTimeout(() => {
//   console.log("We are here(1)");
// }, 0);

// new Promise((res, rej) => {
//   setTimeout(() => {
//     console.log("We are here(2)");
//   }, 500);
// });

// console.log("We are here (3)");
// console.log("HEHE");

// const xhr = new XMLHttpRequest();

// xhr.open("get", "https://swapi.dev/api/people", false);

// xhr.onload = function () {
//   console.log(xhr.responseText);
// };

// xhr.send();

// console.log("Hello world");

// fetch("https://swapi.dev/api/people").then((res) => {
//   const json = res.json();
//   console.log("[json]", json);

//   json.then((res) => {
//     console.log(res);
//   });
// });
