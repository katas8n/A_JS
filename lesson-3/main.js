import { Component } from './core/Component';
import { render , insert } from './core/render';

import './style.css';

const errorMessage =  new Component({tagName : "div" ,className: "error--active", textContent : "Try again , there is an error!"})

const inputEvent =  {
  type : 'keyup',
  action : (e) => {
    if(e.target.value.length < 5) {
      e.target.style = `border: 2px solid red;`;
      
      errorMessage.style = `color : tomato;`
      errorMessage.className = errorMessage.className + "--active";

    } else {

      errorMessage.className = 'error';
      e.target.style = `border: 2px solid green;`;
    }
  }
};

const input =   new Component({
  tagName : "input",
  className : "input",
  placeholder : "email",
  name : "email",
  events : [
    inputEvent,
    // {
    //   type : "click",
    //   action : (e) => {
    //     alert("We might!")
    //   }
    // }
  ]
});

// const inputs = [   
//   input,
//   new Component({
//     tagName : "div",
//     className : "options",
//     html :{
//       position : "afterbegin",
//       text :`
//       <h2>div</h2>
//       <h2>ul</h2>
//       `,
//     },
//     events : [
//       {
//         type : "click",
//         action : (e) => {
//           console.log('[e.target]', e.target);
//           input.value = e.target.textContent;
//         }
//       }
//     ]
//   }),
//   new Component({
//     tagName : "input",
//     className : "input",
//     placeholder : "password",
//     name : "password"
//   })
// ]

// const form = new Component({
//   tagName : "form",
//   html : {
//     position : "afterbegin" ,
//     text : "<h2>There is our form</h2>"
//   },
//   className : "form",
//   children :[...inputs , new Component({
//     tagName : "button" ,
//     className : "button" ,
//     textContent : "Submit"
//   }),
//   errorMessage
// ]
// })

// render(document.querySelector("#app") , form)

// console.log('[form]', form);
// console.log('[form]', form);
