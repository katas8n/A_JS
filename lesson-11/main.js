// function tree() {
//   const grandPa = "GrendPa";

//   return function getFather() {
//     const father = "father";

//     return function getSon() {
//       const son = "son";

//       return `Here we are ${grandPa} => ${father} => ${son}`;
//     };
//   };
// }

// const first = tree();
// const second = first();
// const result = second();

// console.log("[result]", result);

// function closure(position) {
//   let arr = "";

//   return function (film) {
//     arr += film;
//     position++;
//     return [position, arr];
//   };
// }

// const person = closure(1, "Harry Potter");
// person();
// console.log(person("Kek"));
// console.log(person("Lol"));
// const heh = person("heh");
// console.log("[heh]", heh);
// person();

// console.log("[person]", person("Uiu"));
// function doIceUp() {
//   let ice = "ice";
//   let ball = 0;

//   return ice + ++ball;
// }

// const ice = doIceUp();
// doIceUp();
// doIceUp();
// doIceUp();
// doIceUp();
// doIceUp();

// console.log("[ice]", ice);

// const data = closure(1);
// const result1 = data();

// const data2 = closure(22);
// data2();
// data2();
// data2();
// data2();
// data2();
// data2();
// const result = data2();
// console.log("[data2]", result);
// Cash function

// Write function which will get last visit of user
// history("I've seen 'YouTube'")
// history("I've seen 'Netflix'")
// history("I've seen 'Harry Potter'")
// history("I've seen 'Lord of the Rings'")

// history :
// 1.I've seen 'YouTube'
// 2.I've seen 'Netflix'
// 3.I've seen 'Harry Potter'
// 4.I've seen 'Lord of the Rings'

document.addEventListener("click", (e) => {
  console.log("[e.target.value]", e.target.textContent);
});
