// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(new Date());
//   }, 3000);
// });

// promise.then((date) => {
//   try {
//     console.log("[date]", date);
//   } catch {
//     console.log("Something went wrong");
//   } finally {
//     console.log("Get out of here!");
//   }
// });

// console.log(1);

// console.log("[promise]", promise);

// ES8
// async / await

// async function showMustGoOn() {
//   const kek = await new Promise((res) => {
//     return res(1);
//   });

//   await console.log("[kek]", kek);
// }

// showMustGoOn();
