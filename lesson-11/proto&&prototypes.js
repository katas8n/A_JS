// __proto__ vs prototype

// const newArr = new Array();
// console.log("[newArr]", newArr);

// function sayHello() {
//   console.log("Hello");
// }

// sayHello.surname = "Doe";

// console.log("[sayHello]", sayHello.surname);

// const funcObj = {
//     name : "greeting",
//     () : console.log("Hello!")
// }

// funcObj();

// __proto__

// const john = {
//   name: "John",
//   surname: "Doe",
// };

// const mike = {
//   name: "Mike",
//   __proto__: john,
// };

// console.log("[mike]", mike);

// function Human(name, surname) {
//   this.name = name;
//   this.surname = surname;
// }

// Human.prototype.eyeColor = "blue";

// const jack = new Human("Jack", "Sparrow");

// console.log("[jack]", jack.eyeColor);
// Object.prototype.huck = "you!";

// console.log(Object.huck);

// Array.prototype.isMisha = (el) => {
//   for (let i = 0; i < el.length; i++) {
//     console.log("Are you Misha?");
//   }
// };

// [].isMisha(["Misha", "Bob"]);
