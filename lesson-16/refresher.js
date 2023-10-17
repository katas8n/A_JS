// import { Human, Driver } from "./classes";
// import { genders } from "./interfaces";

import "./style.css";

// const john = new Human({
//   firstName: "John",
//   balance: 0,
//   gender: genders.male,
// });

// const mike = new Driver({
//   firstName: "Mike",
//   balance: 0,
//   gender: genders.male,
// });

// console.log("[mike]", mike);
// console.log("[john]", john);
// console.log("[john]", john.getName());

// const main = document.getElementById("main");
// const header = document.getElementsByClassName("header");
// const footer = document.getElementsByTagName("footer");
// console.log("[footer]", footer);

// const navLinks = document.querySelectorAll(".nav-link");

// byID
// const main2 = document.querySelector("#main");

// byTag
// const nav = document.querySelector("nav");

// byClass
// const navLink = document.querySelector(".nav-link");

// byAttr
// const input = document.querySelector("[name='searcher']");

// console.log("[main2]", main2);
// console.log("[navLink]", navLink);
// console.log("[input]", input);
// console.log("[main]", main);
// console.log("[header]", header);
// console.log("[footer]", footer);
// console.log("[nav]", nav);
// console.log("[navLinks]", navLinks);

// SET className
// main.className = "main";
// input.placeholder = "Hello world";
// input.value = 23;
// main.textContent = "Main text";

// setAttribute
// main.setAttribute("kek", "main");

// SetStyles
// input.style = `background: darkmagenta; padding : 2rem;`;

// console.log("[input.getBoundaryClientRect]", input.getBoundingClientRect());
// console.log("[input.top]", input.style.top);

// let top = input.getBoundingClientRect().top;

// document.addEventListener("keydown", (e) => {
//   console.log("[top]", top);

//   if (e.key === "ArrowUp") {
//     top -= 20;
//     input.style = `
//       top : ${top}px;
//     `;
//   } else if (e.key === "ArrowDown") {
//     top += 20;

//     input.style = `
//       top : ${top}px;
//     `;
//   }
// });

// console.log("[main]", main);

// create
// const div = document.createElement("div");
// classList - allows us to add or remove a className
// div.classList.add("block");
// div.classList.remove("block");
// div.classList.toggle("block");

// remove
// div.remove();

// console.log("[div]", div);
// let i = 0;

// const onClickHandler = (e) => {
// console.log("[e.target]", e.target);
// console.log("[e.target.TAG_NAME]", e.target.tagName);
// console.log("[e.target.classname]", e.target.className);
// console.log("[e.target.id]", e.target.id);
//   console.log("Hello");
// };

// footer[0].addEventListener("click", onClickHandler);

// footer[0].addEventListener("click", (e) => {
//   i++;
//   console.log("[i]", i);
//   if (i === 2) {
//     footer[0].removeEventListener("click", onClickHandler);
//   }
// });
