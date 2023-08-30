// matches
// const links = document.body.children;

// for(const element of ["Hello" , "world" , 'Wow']){
//     console.log('[element]', element.includes("w"));
// }

// for(const link of links) {
//     if (link.matches('a[href="https://medium.com/@bytefish/the-roadmap-to-be-a-frontend-developer-in-2021-40671f7bd7ba"]')) {
//         console.log("Here we are");
//     }
// }

// console.log('[links]', links);

// closest

// const element = document.querySelector("#kek");


// element.addEventListener('click', (e) => {
//     element.closest(".content").remove()
// })


// HTMLCollection
// const john = {
//     name : "John"
// }

// john.name


// * classname - > .
// * id - > # 
// * tagName - > tagName  
// * [placeholder='email']- > attrs   
// const buttons = document.querySelectorAll("button");
// console.log('[buttons]', buttons);

// const content = document.querySelector("#content");

// const button = document.createElement('button');
// button.className = "new BTN!!!!"

// const nodes = document.querySelectorAll("button");


// content.append(button)
// // Only collection is a really live array which will give us an opportunity to manage 
// // elements which we've added after document was loaded 
// console.log('[collection]', buttons);
// console.log('[nodes]', nodes);

const app = document.querySelector("#app");


const cards = [
    {   
        id: 0,
        text : "How are u doing?",
        translate : "Как дела ?"
    },
    {   
        id: 1,
        text : "Do you smoke many cigarets?",
        translate : "Много ли ты куришь?"
    },
    {   
        id: 2,
        text : "What do you do?",
        translate : "Чем ты занимаешься?"
    },
]

for(const card of cards) {
    const htmlCard = toHTML("div" , card);

    const button = document.createElement('button');
    button.className = "card-btn";
    button.textContent = "I Do recall";

    htmlCard.append(button);

    button.addEventListener('click' , (e) => {
        const start = cards.slice(0,e.target.parentNode.id); 
        const finish = cards.slice(+e.target.parentNode.id + 1); 

        const newArray = [...start , ...finish];

    })

    app.append(htmlCard)
}

function toHTML(tagName , originalText) {
    const {text , translate ,id} = originalText; 

    const wrapper = document.createElement('div');
    wrapper.id = id;
    const element = document.createElement(tagName);

    element.innerHTML += `
        <h3>${text}</h3>
        <h4>${translate}</h4>
    `;

    wrapper.append(element);

    return wrapper
}
