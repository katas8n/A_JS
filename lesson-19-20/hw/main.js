// let isSpinn = true;

// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res(8);
//   }, 3600);
// })
//   .then((val) => {
//     console.log("Here we are ,", val);
//     isSpinn = false;
//   })
//   .then(() => {
//     console.log("[isSpinn]", isSpinn);
//     console.log("There is nothing here yet");
//   });

// console.log("There is sync phase of code");
// console.log("[isSpinn]", isSpinn);

// let isAwait = true;


// const clsBtn = document.querySelector("#close");

// if (isAwait) clsBtn.style.display = "none";

// new Promise((res, rej) => {
//   setTimeout(() => {
//     isAwait = true;

//     res(isAwait);
//   }, 3000);
// }).then((val) => {
//   if (val) clsBtn.style.display = "flex";

//   setTimeout(() => {
//     clsBtn.addEventListener("click", (e) => {
//       e.target.parentElement.parentElement.remove();
//     });
//   }, 4000);
// });

//
