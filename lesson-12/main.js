import "./style.css";

// DT
// Numbers , strings , und , null , boolean , und

// const x = 23;

// numbers - + / - / * / / / %
// < / > / <= / >= / == / ===

// console.log(2 + 2);

// boolean
// console.log(2 > 2); // False

// string
// const kek = "Hello";

// kek[1] = "E";
// console.log("[kek]", kek);

// DS
// objects
// const john = {
//   name: "John",
// };

// const a = prompt("Put here data which will be a key of obj ?")
// delete john.name;
// console.log("[john]", john);

// const people = ["Mike", "Bob", "John"];

// const newPeople = people.filter((el) => {
//   return el !== "Bob";
// });
// console.log("[newPeople]", newPeople);
const arrOfAdmins = [
  {
    login: "admin",
    pass: "2323",
  },
];

// array
const moviesDB = [
  {
    category: {
      action: [
        {
          label: "harry potter",
          price: 23,
          description: "something ...",
        },
        {
          label: "the lord of the rings",
          price: 13.13,
          description: "Anything ...",
        },
        {
          label: "Mad max",
          price: 23.13,
          description: "Something ...",
        },
      ],
      comedy: [
        {
          label: "Comedy 1",
          price: 23.13,
          description: "Something ...",
        },
        {
          label: "Comedy 2",
          price: 13.13,
          description: "Something ...",
        },
        {
          label: "Comedy 3",
          price: 33.13,
          description: "Something ...",
        },
      ],
    },
  },
];

// moviesDB

// Register => user should be a guest
// Auth => user might be a guest or admin / if user in arrOfAdmins - is admin / guest

// admin permissions :
// - add new film
// - remove film
// - update film
// - read film

// CRUD

// Our program :
// admin and guest might read info about film
// admin might add new film
// admin might remove  film
// admin might update  film

// function getData() {
//   console.log(this.name);
// }

// getData.call({ name: "John" });

// class Film {
//   constructor({ title, cover, desc, price }) {
//     this.title = title;
//     this.cover = cover;
//     this.desc = desc;
//     this.price = price;
//   }
//   getTitle() {
//     console.log(this.title);
//   }
// }

// const spiderMan = new Film({});

// HW
// build ur own cinema

const movies = [
  {
    // unique value
    id: "23232323",
    title: "The Iron man",
    description: "The iron man ... ",
    cover: "src",
  },
  {
    // unique value
    id: "23232323",
    title: "The Iron man",
    description: "The iron man ... ",
    cover: "src",
  },
];

// class Movie
// method toHTML

// <div class="movie">
// <h3>{title}</h3>
// <img src="....">
// <p>{desc}</p>

// <button class='watch'>
// </div>

// Append ur html on the page
