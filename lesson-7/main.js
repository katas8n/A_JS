// class Human {
//   constructor(n, s, a) {
//     this.name = n;
//     this.surname = s;
//     this.actions = a;
//   }

//   getInfo() {
//     console.log(
//       `Hello , here is - ${this.name}. His surname is ${this.surname} and he makes ${this.actions}`
//     );
//   }

//   setName(newName) {
//     this.name = newName;
//   }

//   //   set() {}
//   //   get() {}
// }

// class Developer extends Human {
//   constructor(n, s, a, l) {
//     super(n, s, a, l);
//     this.lanuages = l;
//   }

//   getInfo() {
//     console.log(
//       `Hello , here is THE DEVELOPER - ${this.name}. His surname is ${this.surname} and he makes ${this.actions}`
//     );
//   }

//   getLanguages() {
//     console.log(`There is ${this.name} , he know : ${this.lanuages}`);
//   }
// }

// const misha = new Developer("Misha", "Doe", "songs", [
//   "html",
//   "css",
//   "js",
//   "python",
// ]);

// const ruslan = new Developer("Ruslan", "Smith", "lose streack", [
//   "html",
//   "css",
//   "js",
//   "python",
// ]);

// ruslan.getInfo();
// misha.getInfo();

// ruslan.getLanguages();
// misha.getLanguages();

// const matrix1 = [
//   [2, 3, 4],
//   [13, 12, 10],
//   [11, 6, 7],
// ];

// const matrix2 = [
//   [12, 11, 14],
//   [8, 22, 14],
//   [6, 8, 7],
// ];

// const matrix3 = [
//   [2, 3],
//   [13, 12],
// ];

// const matrix4 = [
//   [12, 11],
//   [8, 22],
// ];

// function solveMatrix(a, b) {
//   const solvedMatrix = [];

//   for (let i = 0; i < a.length; i++) {
//     const newRow = [];

//     const row1 = a[i];
//     const row2 = b[i];

//     for (let j = 0; j < row1.length; j++) {
//       const sum = row1[j] + row2[j];

//       newRow.push(sum);
//     }

//     solvedMatrix.push(newRow);
//   }

//   console.log("[solvedMatrix]", solvedMatrix);

//   return solvedMatrix;
// }

// solveMatrix(matrix1, matrix2);
// solveMatrix(matrix3, matrix4);
