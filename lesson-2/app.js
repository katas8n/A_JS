const app = document.querySelector("#app");
// const container = document.querySelector(".container");
// const p = document.querySelector("#text");

// function wrapp(callback,arg) {
//     console.log(callback(arg));
// }

// wrapp((arg) => {
//     console.log("Hello from wrapper, I'm callback");
// })

// console.log('[app]', app);
// console.log('[container]', container);
// console.log('[p]', p);

// const huck = (e) => {
//     // console.log('[e.eventPhase]', e.eventPhase);
//     alert("Here is an APP EVENT!");
// }
//                     // action , callback
// app.addEventListener('click' ,huck);

// container.addEventListener('click' , (e) => {
//     // console.log('[e.eventPhase]', e.eventPhase);
//     alert("Here is a CONTAINER EVENT!");

// })
// // const event = "kek";

// p.addEventListener('click' , (event) => {
//     // console.log('[e.eventPhase]', e.eventPhase);

//     event.stopPropagation();
//     alert("Here is a P EVENT!");
//     app.removeEventListener('click' , huck)

// })

// app.addEventListener('click',
//     (e) => {
//         // target - get current html element
//         const target = e.target;
//         if(target.id === 'text') {
//            console.log('[target]', target);

        
//         }
//         if(target.id === 'app') {
//             alert('Huck you! From app')
//         }
        
//     }
// )

// 
// Create Element
// const element = document.createElement('button');

// Add attributes
// element.className = "box";
// element.id = "id0231323";
// element.textContent = "Submit";
// element.style.background = 'lightblue';

// Add Event Listener
// element.addEventListener('click' , (e) => {
//     console.log("Hello world!");
// })

// nodes 
// append , prepend , insertAdjacentHTML , innerHTML ... 

// app.prepend(element);
// app.append(element)

// app.insertAdjacentElement('beforeend' , element);

// element.className = "box";
// element.id = "id0231323";
// element.textContent = "Submit";
// element.style.background = 'lightblue';

// app.innerHTML += `
//    <button style="background:lightblue;" className='box'>Submit</button>
// `


// console.log('[element]', element.innerHTML);


//! HW
// !!! YOU MIGHT CHANGE CODE
// Programm should take user email and password , 
// then durring process of typing we should light input + clues // * keydown | validators : email.length > 4 , password.length > 4 and should contain : numbers + strings
// and if data in inputs are incorrect we disable button // * button has attr disabled 

function Tag(attrs={}) {
    const { tag ,cn, id ,textContent} = attrs;
    const element = document.createElement(tag);
    element.cn = cn;

    if(id) element.id = id;
    if(textContent) element.textContent = textContent;

    return element
}

const form = Tag({
    tag : "form",
    cn : "form",

});

const emailInput = Tag(
    {
        tag : "input",
        cn : "input",
        id : "email-input",
    }
)

const passwordInput = Tag(
    {
        tag : "input",
        cn : "input",
        id : "password-input"
    }
)

form.append(emailInput,passwordInput,
    Tag({
        tag : "button",
        cn : "button",
        id : "submit-btn",
        textContent : "Submit"
    })
)

app.append(form)




// form.getElement() //! Doesn't