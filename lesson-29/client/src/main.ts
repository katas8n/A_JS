import "./style.css";

const getNames = document.querySelector("#getNames");
const getSurnames = document.querySelector("#getSurnames");
const postName = document.querySelector("#postName");

getNames?.addEventListener("click" , () => {
    (async function() {
        const serverData = await fetch("http://localhost:3000/names");
        const parsedData = await serverData.json();

        console.log(parsedData)
    })()
})

getSurnames?.addEventListener("click" , () => {
    (async function() {
        const serverData = await fetch("http://localhost:3000/surnames");
        const parsedData = await serverData.json();

        console.log(parsedData)
    })()
})

postName?.addEventListener("click" , () => {
    (async function() {
        const serverData = await fetch("http://localhost:3000/names" , {
            headers : {
                'Content-Type' : 'application/json' 
            },
            method : "POST",
            body : JSON.stringify({ name : "Michael, davai vse po novoi!" })
        });
        const parsedData = await serverData.json();

        console.log(parsedData)
    })()
})
