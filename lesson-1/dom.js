// console.log(document.title); // node of document

// setTimeout(() => {
//     document.title = "Kek";
// },2000)

// console.log('[document]', document);
// console.log('[document]', document.body.style); // take styles from element
// console.log('[document]', document.body.addEventListener); // add event to element


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!EVENT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const element =  document.body;

// 2 agrs : 
// 1 arg - event : click , scroll , keydown , change , blur , ... 
// 2 arg - callback function . 

// e - event is always object 
// element.addEventListener('keydown' , (event) => {
//     console.log('[event]', event.key);
//     if( event.key === "ArrowUp") {
//         console.log("Dota2");
//     }
//     console.log("Key was pressed down!");
// })

// element.addEventListener('click' , (event) => {
//     console.log('[event]', event);
//     console.log("Was clicked");
// })

// function wrapp(callback) {
//     const result = 13 + 10;
//     const callbackResult = callback(result);

//     return callbackResult;
// }

// function favouriteNumber(number) {
//     return "Ur favorit number is " + number;
// }

// const result = wrapp(favoriteNumber);

// console.log('[result]', result);
// const colors = [
//     "lightgreen",
//     "fuchsia",
//     "purple",
//     "coral"
// ]

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!SELECT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// console.log(document.getElementsByTagName('p')); // HTMLCollection

// const p = document.getElementsByTagName('p');
// console.log(p.item(0));
// console.log(p.length);

// for (const singleP of p) {
//     console.log('[singleP]', singleP);
// }

// for(let i = 0 ,j = 0 ; i < p.length ; i++,j++) {

//     p[i].style.background = colors[j];
// }

// console.log(p.namedItem()) / 0

// [...p].forEach((el , i) => {
//     el.style.background = colors[i];
// })
// !!!!!!!SELECT BY selector 
// const app = document.querySelector("#app");
// const paragraph = document.querySelectorAll(".paragraph");
// !!!!!!!SELECT BY ID 
// const app2 = document.getElementById("app");
// !!!!!!!SELECT BY className
// const paragraph2 = document.getElementsByClassName("paragraph");
// !!!!!!!SELECT BY attr
// const firstName = document.querySelector('[name="name"]');

// console.log('[app]', app);
// console.log('[app2]', app2);
// console.log('[paragraph]', paragraph);
// console.log('[paragraph2]', paragraph2);

// !!!!!!!!!!!!!CHILDREN
// console.log(app.children[1].children[1]);

// !!!!!!!!!!!!!PARENT-NODE
// console.log(app.parentNode);


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!textContent!!!!!!!!!!!!!!!!!!!
// console.log('[PARAGRAPH_TEXT]', paragraph2[0].textContent);


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!innerHTML!!!!!!!!!!!!!!!!!!!!!
// console.log('[INNER_HTML]', app.innerHTML);


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!getBoundingClientRect!!!!!!!!!
// console.log('[INNER_HTML]', app.getBoundingClientRect());


// const form = document.getElementById("form");
// const btn = document.querySelector("[attr='btn']");
// const firstName = document.querySelector('[name="name"]');
// const lastName = document.querySelector('[name="surname"]');
// const side  = document.querySelector('#side');

// event 
// ! change
// firstName.addEventListener('change' , (e) => {
//     console.log(e.target.value);
// })

// event 
// ! click
// btn.addEventListener('click' , (e) => {
//     // preventDefault 
//     e.preventDefault();

//     if(firstName.value.length < 2){
//         firstName.style.background = "red";
//     }
//     // console.log('[firstName.value]', firstName.value);
// })





// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!HOMEWORK!!!!!!!!!!!!!!!!!!!!!!!
// 1. You have a form in HTML file.
// 2. You should find form 
// 3. Print every child of form to the console
// 4. Find every input in DOM ,but you can't use straight calls 
// : getElementByID  ,getElementByTagName ,getElementByClassName 
// , querySelector !
// 5. First name should be longer than 4 symbols  
// 6. Last name should be longer than 5 symbols  
// 7. Side must be dark 
// 8. IF form is correct u should print a modal window with 
// congratulations , otherwise u should tell user that there 
// is incorrect data.
// 9*. If data is incorrect light placeholders with a red color  
// 10*. If data is correct light placeholders with a lightblue color  