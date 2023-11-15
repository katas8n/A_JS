import './style.scss'

// const validData = {
//   email : "kkk",
//   password : "23jsu",
// }

// const email = document.querySelector("#email");
// const password = document.querySelector("#password");
// const loginBtn  = document.querySelector("#login-btn");
// const invokeBtn = document.querySelector("#invoke-btn");
// const modal = document.querySelector(".modal") as HTMLElement;
// const background = document.querySelector(".background") as HTMLElement;


// invokeBtn?.addEventListener("click" , (e) => {
//   console.log(e)
//   if(modal?.className.includes("--active")) {
//     modal.className = "modal";
//     background.className = "background"
//   }else {
//     modal.className = "modal--active";
//     background.className = "background--active"
//   }
 
// })

// loginBtn?.addEventListener('click',(e) => {
//   console.log(email.value)
//   console.log(password.value)

// })

// function logError <A> (errMsg:A):A {
//   return errMsg
// }

// const err : string = logError("Error 404");
// const err1 : number = logError(404);
// const err2 : object = logError({title : "error", msg : "error"});

// interface Person {
//   firstName : string;
//   surname : string;
//   sayHello() : void;
// }

// class Admin implements Person {
//   constructor(
//     public firstName:string ,
//     public surname : string 
//   ){
    
//   }

//   public sayHello() : void {
//     console.log("Hello world , by " ,this.firstName );
//   }
// }

// const john = new Admin("John" , "Doe");
// john.sayHello();
// console.log(john);

// BigO
// O(1)
// const a = 8; 

// const arr = [1 ,2 ,3 ,4 ,5];

// O(n) - depends of arr length 
// console.log("----------O(n)")
// for(let i = 0 ; i < arr.length ; i++) {
//   const el = arr[i];
//   console.log(el)
// }

// console.log("----------O(nˆ2)")

// O(nˆ2) - depends of arr length and amount of steps inside
// let amountOfExec = 0;
// for(let i = 0 ; i < arr.length ; i++) {
//   const el = arr[i];
  
//   for(let j = 0 ; j < arr.length ; j++) {
//     const nestedEl = arr[j];

//     amountOfExec++
//     console.log(amountOfExec)
//     console.log(el , nestedEl)
//   }
// }


// Swap 

// const people = ["Jim" , "Bob" , "Mike" , "John"];

// function swap(arr:[] , firstIndex:number , secondIndex : number) {
//   const copyOfFirstEl = arr[firstIndex];

//   arr[firstIndex] = arr[secondIndex] 
//   arr[secondIndex] = copyOfFirstEl;

//   console.log(arr)
// }

// swap(people ,1, 3)

