import './scss/style.scss';

const form = document.querySelector("#form");

// form?.addEventListener("submit" , (e: Event) => {
//     e.preventDefault();

//     const image =[...e.target.children].filter(el => el.name === "image")[0];

//     (async function () {
//         const result = await fetch("http://localhost:3000/api/submit-item" , {
//             headers : {
//                 'Content-Type' : 'application/json' 
//             },
//             method : "POST",
//             body : JSON.stringify({
//                 title : "Everything",
//                 text : "Hello world!",
//                 image: image.value
//             })
//         })

//         console.log(result)
//     })()
    
// })