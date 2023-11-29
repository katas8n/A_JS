import './style.css';

// interface IModal {
//   element : any ,
//   timeToExpire : number ,
//   isVisible : boolean , 
//   setVisibility : () => boolean ,
//   getVisibility : () => boolean,
//   timer : () => void,
//   toHTML : () => HTMLElement,
//   timeLeft : any
// }

// class Button {
//   constructor(
//     private text:string
//   ) {

//   }

//   toHTML(typeOfEvent , event) {
//     const button = document.createElement("button");
//     button.className = "expired-window-btn";
//     button.textContent = this.text

//     button.addEventListener(typeOfEvent , event);

//     return button;
//   }
// }

// class Modal implements IModal{
//   constructor(
//     public element:any,
//     public timeToAppear: number ,
//     public timeToExpire: number ,
//     public isVisible : boolean , 
//     public timeLeft : any , 
//   ){
//     this.element = "";
//     this.timeLeft = "",
//     this.timer();
//   }

//   setVisibility () : boolean  {
//     this.isVisible = true;
    
//     return this.isVisible;
//   }

//   timer () : void {
//     new Promise((res , rej) => {
//       setTimeout(() => {
  
//        res(this.setVisibility());
        
//       }, this.timeToAppear);

//     }).then(res => {
//       if(!res) return 'Huck you'

//       console.log("Alright!")
//     }).then(() => {
//       setInterval(() => {
       
//         this.timeToExpire = this.timeToExpire - 1;
//         this.timeLeft.innerHTML = this.timeToExpire ;

//         if(this.timeToExpire <= 0) {
//           this.isVisible = false;
//           this.element.remove();
//         }

//       },1000)
//     })
//   }

//   getVisibility () : boolean {
//     return true;
//   } 

//   toHTML() {
//     const modal = document.createElement("form");
//     modal.className = "expired-window";

//     const timer = document.createElement("div");
//     timer.textContent = '10';

//     const btns = [
//       new Button("I am here!").toHTML("click", () => {console.log("Hello")}),
//       new Button("I'm not here!").toHTML("click",() => {console.log("Goodbye")}),
//     ]

//     modal.append(timer,...btns)

//     this.element = modal;
//     this.timeLeft = timer;

//     return modal;
//   }

// }


// const expireWindow = new Modal("",1000,10,false,"").toHTML();

// document.body.insertAdjacentElement('afterbegin',expireWindow)
// key of 

// type unicornColor = "darkmagenta" | "magenta" | "purple";

// interface IUnicorn {
//   name : string , 
//   color : unicornColor,
//   speed : number,
// }

// const pony: IUnicorn = {
//   name : "Rainbow Pony",
//   color : 'darkmagenta',
//   speed : 60
// } 

// type UnicornKey = keyof IUnicorn;

// function getProp<T, U extends keyof T>(obj : any , key : string) : T[U] {
//   return obj[key];
// }

// console.log(getProp<IUnicorn,'name'>(pony , 'name'));
// console.log(getProp<IUnicorn,'surname'>(pony , 'surname'));


// const userChoice = 'Ur result is : ';
// const firstValue = 13;
// const secondValue = 29;


// function calc <T, U>(a : T, b : T, c : U) {

//   if(typeof a === 'number' && typeof b === 'number') {
//     return a + b;
//   } else if (typeof a === 'string' && typeof b === 'string') {
//     return a.slice(0,3) + b.slice(3,5);
//   }else if(Array.isArray(a) && Array.isArray(b)){
//     const c = a.concat(b);
    
//     return c;
//   }
// }

// calc<number,string>(firstValue, secondValue ,userChoice);



// function calc(a : any, b : any, c : string) {

//   if(typeof a === 'number' && typeof b === 'number') {
//     return a + b;
//   } else if (typeof a === 'string' && typeof b === 'string') {
//     return a.slice(0,3) + b.slice(3,5);
//   }else if(Array.isArray(a) && Array.isArray(b)){
//     const c = a.concat(b);
    
//     return c;
//   }
// }

// Currency converter 
// $ -> E
// E -> $ 
// grn -> $
// $ -> grn
// grn -> E
// E -> grn