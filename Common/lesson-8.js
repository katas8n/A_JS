// class Human {
//   static isCoder(a, b) {
//     if (a > b) {
//       console.log("A is bigger than B");
//     }
//     console.log("Not a coder");
//   }

//   constructor(n, s) {
//     this.name = n;
//     this.surname = s;
//   }

//   greeting() {
//     console.log(`There is ${this.name} , its surname is ${this.surname}`);
//   }
// }

// Human.isCoder(2, 1);

// const john = new Human("John", "Doe");
// const jim = new Human("Jim", "Smith");

// john.greeting();
// jim.greeting();

// class Developer extends Human {
//   constructor(n, s, isCoder) {
//     super(n, s);
//     this.isCoder = isCoder;
//   }

//   writeCode() {
//     console.log("11010101001");
//   }
// }

// class SeniorDeveloper extends Developer {
//   constructor(n, s, isCoder) {
//     super(n, s);
//     this.isCoder = isCoder;
//   }

//   writeCode() {
//     console.log("Quality was improved : 11010101001");
//   }
// }

// const john = new SeniorDeveloper("John", "Doe", true);

// const mike = new Developer("Mike", "Bibby", true);
// john.writeCode();
// mike.writeCode();
// mike.greeting();
