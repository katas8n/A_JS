import "./style.css";

// ! block
if (22 < 23) {
  // gloabl
  // var x = 23;
  // let - local
  let y = 23;
  // const
  let w = 23;
}

// console.log(x); // x?
// console.log(y); // y?
// console.log(w); // w?

// ! Data Types
//! Numbers
// console.log(2 + 21); //23
// console.log(2 * 11.5); // 23
// console.log(23 / 11.5); // 2
// console.log(2 ** 10); // 1024
// console.log(25 % 4); // 1

// const world = "world";
// const and = "and";
// let username = "John";
// const obj = {};
// const arr = [];

// const color = "green";
// username += "kek";

// const newStr = username[0] + "haha";
// console.log("[newStr]", newStr);
//! String
// console.log("Hello " + world);
// console.log("Hello " + world);
// console.log("Hello " + obj);
// console.log("Hello " + arr);
// console.log("hello " + world + " " + and + " " + username);
// console.log(`hello ${world} ${and} ${username}`);
// console.log(`hello ${2 + 2}`);
// console.log(`hello ${color === "red" ? "red" : "not red"}`);
// console.log(`hello ${color && color}`);

// console.log("Hello "[0]);
// console.log("Hello ".slice(3, 5));

// if (color === "red") {
// } else {
// }

// ! Boolean

// const userName = "John";

// const userChoice = prompt("What do you think Johns name is ...");

// True / False
//  === - check whether data equal by type + content
//  == - check whether data equal by content (! doesn't include type)

// if (userChoice === userName) {
//   console.log("[userChoice === userName]", userChoice === userName);
//   console.log("equal");
// } else {
//   console.log("[userChoice === userName]", userChoice === userName);
//   console.log("not equal");
// }

// ! Null
// const isNull = prompt("Click on the 'cancel' btn");

// console.log(isNull === null);

// ! Undefined
// const obj = {
//   name: "John",
// };

// obj.surname = "Doe";

// console.log("[obj]", obj.surname);

// console.log("[x]", x);

// var x = 23;

// ! !(not) , && (and) , || (or) ====> lead to boolean

// const userName = prompt("What is your name ? ");
// const surname = prompt("What is your surname ? ");

// if (userName === "Kir") {
//   console.log("CONDITION[1]");
// } else if (userName === "Kir") {
//   console.log("CONDITION[2]");
// } else {
//   console.log("Kek");
// }

// if (userName === "Kir") {
//   console.log("CONDITION[1]");
// }

// *** until it finds false
// console.log(1 && 2 && 3 && 0 && 5);
// *** the first what is true // LAZY
// console.log(1 || 0 || 2);

// const userName = prompt("What's ur name ?");

// userName || 1 || console.log("Here is name");

// Ternary operator
// console.log("Hello" === "Hello" ? "kek" === "hex"? "pex" : "shmex"  : "neKek");

// for (i = 0; i < 10; i++) {
//   console.log("[i]", i);
// }

// for (let i = 0; i < 10; i++) {
//   if (i === 7) continue;

//   console.log("[i]", i);
// }

// const x = 23;

// let y = 33;

// function sayHello() {
//   y = 13;
//   console.log("[LOCAL_y]", y); // 13
//   console.log("[GLOBAL]", x);
// }

// sayHello();
// console.log("[GLOBAL_y]", y); // 13

// (async function () {
//   const kek = await fetch("http://swapi.dev/api/people/");
//   console.log(kek);
//   const parsedData = await kek.json();

//   await console.log(parsedData);
// })();

// const btn = document.querySelector("#btn");
// const searchBar = document.querySelector("#search-bar");

// btn.addEventListener("click", (e) => {
//   (async function () {
//     const kek = await fetch(`http:/swapi.dev/api/${searchBar.value}/`);
//     console.log(kek);
//     const parsedData = await kek.json();

//     await console.log(parsedData);
//   })();
// });

// class Platform {
//   COLUMNS = 11;
//   ROWS = 11;

//   constructor(app) {
//     this.app = app;
//     this.platform = [];

//     for (let i = 0; i < this.ROWS; i++) {
//       const row = [];
//       const element = document.createElement("div");

//       element.className = "rows";

//       for (let j = 0; j < this.COLUMNS; j++) {
//         row.push(["x"]);
//         element.insertAdjacentHTML("afterbegin", `<button>col</button>`);
//       }

//       this.platform.push(row);
//       this.app.append(element);
//     }
//   }

//   getPlatform() {
//     console.log(this.platform);
//   }
// }

// const platform = new Platform(document.querySelector("#app"));

// platform.getPlatform();

// Arrow
// essential knowledge :
//  different "this" behavior ,
//  if your function covers only one row you shouldn't use 'return'
// const arrow = () => 2 + 2;

// Function expression
// Cannot access 'addExpression' before initialization
// const addExpression = function () {
//   return 2 + 2;
// };

// Common function
// function add() {
//   return 2 + 2;
// }

// Anon func
// console.log(
//   "[ANON_func]",
//   (function (a) {
//     return 2 + 2 + a;
//   })(2)
// );
// console.log("[Declar_Func]]", add());
// console.log("[Arrow]", arrow());
// console.log("[Expression]", addExpression());

// Callback
// forEach - method of "Arrays" object

// function to23(fn) {
//   return fn() * 2 - 3;
// }

// function return13() {
//   return 13;
// }

// const result = to23(return13);
// console.log("[result]", result);

// to23
// in to 'to23' -> fn()
// fn() may return something -> it has already finished
// then result of fn we multiply by 2 and subtract 3
// then to23 returns 23 -> now this function ended

// firstLvl which takes a callback
// function toUpperCaseDecorator(callback) {
//   // secondLvl which takes a text for callback
//   return function (text) {
//     // thirdLvl invokes callback and put there text
//     return callback(text).toUpperCase();
//   };
// }

// function getText(text) {
//   return "***" + text + "***";
// }

// const newFunc = toUpperCaseDecorator(getText);
// const result = newFunc("Hello everyone!");
// console.log("[result]", result);

// ! Generators -> generators allow to pause an continue the execution of a function . ***
// keyword : yield

// function* numberGenerator() {
//   let i = 0;
//   while (true) {
//     if (i === 5) i = 0;
//     yield i++;
//   }
// }

// itterator - will count and store value of generated number
// const itter = numberGenerator();

// const firstCall = itter.next().value;
// const secondCall = itter.next().value;
// const thirdCall = itter.next().value;

// console.log("[first_start_of_generator]", firstCall);
// console.log("[secondCall]", secondCall);
// console.log("[thirdCall]", thirdCall);

// for (let i = 0; i < 5; i++) {
//   console.log("[itter.next().value]", itter.next().value);
// }

// ! closures- function that remembers a variable which is closured between outer and inner function
// function outer() {
//   const story = [];
//   function inner(text) {
//     story.push(text);

//     return story;
//   }

//   return inner;
// }
// const outerFunc = outer();

// console.log("[outerFunc()]", outerFunc("Hello"));
// console.log("[outerFunc()]", outerFunc("World"));
// console.log("[outerFunc()]", outerFunc("Huck"));

// ! Technique , kinda cycle ***
// ! O(!n)
// function recursion(n) {
//   debugger;
//   if (n <= 1) return 1;

//   return n * recursion(n - 1);
// }

// console.log("[recursion(5)]", recursion(5));

// const obj = {
//   name: "John",
//   children: {
//     name: "Mike",
//     children: {
//       name: "Jim",
//     },
//   },
// };

// function getLatestOfChildren(obj) {
//   for (const key in obj) {
//     const value = obj[key];

//     if (value.children) {
//       return getLatestOfChildren(value);
//     } else {
//       console.log(value);
//     }
//   }
// }
// getLatestOfChildren(obj);

// console.log(window);
// this -> is window or undefined when we call it without any context (in the global scope)

// ! object's context
// const john = {
//   name: "John",
//   getContext: function () {
//     console.log(this);
//   },
//   nestedObj: {
//     theContext: "exactlyThatContext",
//     getContextOfContext: function () {
//       console.log("[this]", this);
//     },
//   },
// };

// john.getContext();
// john.nestedObj.getContextOfContext();

// ! Fabric function's context
// function User(name) {
//   console.log("[this]", this);
//   this.name = name;
//   console.log("[this]", this);
// }

// const john = new User("John");
// console.log("[john]", john);

// ! Function's context *****
// function getUserName() {
//   return this.name;
// }

// const johnNameObj = { name: "John" };

// const johnsName = getUserName.call(johnNameObj);
// console.log("[johnsName]", johnsName);

// ! Array
// const mapedArr = [
//   {
//     name: "John",
//     surname: "Doe",
//   },
//   {
//     name: "Mike",
//     surname: "Bibby",
//   },
// ].map((person, i) => {
//   return { fullname: `${person.name} ${person.surname}` };
// });

// const arr = [];
// [
//   {
//     name: "John",
//     surname: "Doe",
//   },
//   {
//     name: "Mike",
//     surname: "Bibby",
//   },
// [{name : "John"}].forEach((person) => {
//   arr.push(person);
// });

// const filteredArr = [
//   {
//     name: "John",
//     age: 18,
//   },
//   {
//     name: "Bob",
//     age: 23,
//   },
//   {
//     name: "Sid",
//     age: 13,
//   },
// ].filter((person) => person.age >= 18);
// console.log("[filteredArr]", filteredArr);

// const reducedArr = [
//   {
//     name: "John",
//     age: 18,
//     salary: 200,
//   },
//   {
//     name: "Bob",
//     age: 23,
//     salary: 300,
//   },
//   {
//     name: "Sid",
//     age: 13,
//     salary: 500,
//   },
// ].reduce((prev, current, i) => {
//   prev += current.salary;

//   return prev;
// }, 0);

// console.log("[reducedArr]", reducedArr);

// ! Object , Classes (static , get/set , OOP) , SOLID , async / DOM && BOM ->
// OOP -> programming paradigm , which orginizes code based on objects
// Class -> blueprint , or template for creating objects ; We describe here attributes and methods for potential instances
// Object -> data structure , which provide us a scope , where informatio/data is kept.

//!  Abstract -> blueprint over a blueprint
class Person {
  // fields (with privat scope)
  legs = 2;
  hands = 2;
  // ! class gives us opportunities to define variables but not call anything
  // console.log('[x]', x);

  // 'new' will call constructor ;
  constructor(n, s, a) {
    // this
    this.name = n;
    this.surname = s;
    this.age = a;
    console.log(this);
  }

  getName() {
    console.log("[this.name]", this.name);
  }

  breath() {
    console.log("Ehh");
  }

  introduce() {
    console.log(`Hi , my name ${this.name}`);
  }
}

// const person = {
//   name : "John",
//   getName: () => {
//     console.log('[person.name]', person.name);
//   }
// };

// const person2 = new Person("Mike");

// person.getName();

// person.breath();
// person2.breath();
// console.log("[person]", person.x);

// ! Encapsulation  -> OOP's concept, which joins attrs and methods to object
// class Card {
//   INITIAL_VALUE = 0;

//   constructor(initialValue = this.INITIAL_VALUE) {
//     this.balance = initialValue;
//   }

//   deposit(sum) {
//     this.balance += sum;
//   }

//   getMoney(sum) {
//     this.balance -= sum;
//   }
// }

// const card = new Card();
// const card2 = new Card();

// console.log("[card]", card);

// card2.deposit(2323);
// card.getMoney(23);

// console.log("[card2]", card2);

// console.log("[card]", card);

// ! Inheritance -> allows us to extend one class from another ->
class Chief extends Person {
  constructor(n, s, a, p) {
    super(n, s, a);
    this.p = p;
  }

  // Polymorphism -> classes might have common methods, but we might overdrive it ;
  do() {
    console.log("I'm a chief , I cook a dinner.");
  }
}

class Admin extends Person {
  constructor(n, s, a, p) {
    super(n, s, a);
    this.p = p;
  }

  // Polymorphism -> classes might have common methods, but we might overdrive it ;
  do() {
    console.log("I'm an admin , I fix complukters troubles.");
  }
}

class Developer extends Person {
  constructor(n, s, a, p) {
    super(n, s, a);
    this.p = p;
  }

  // Polymorphism -> classes might have common methods, but we might overdrive it ;
  do() {
    console.log("I write a code. I'm a programmer.");
  }
}

// Polymorphism -> classes might have common methods, but we might overdrive it ;

const john = new Developer("John", "Doe", 23, "dev");
john.do();

const mike = new Admin("Mike", "Bibby", 32, "admin");
mike.do();

const bob = new Chief("Bob", "Tyson", 13, "chief");
bob.do();

console.log("[john]", john);
console.log("[mike]", mike);
console.log("[bob]", bob);

// ! OOP -> staticMethods / overdrives
// ! || DOM && BOM ||| -> async -> promise -> async/await => xmlHttpRequest -> fetch
