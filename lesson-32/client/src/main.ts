import './scss/style.scss';

const getData = document.querySelector('#get');
const profiles = document.querySelector('#profiles') as HTMLElement;

getData?.addEventListener("click" , () => {
  (async function () {
    profiles.innerHTML = ``

    const data = await fetch("http://localhost:3000/api/get-profiles");
    const parsedData = await data.json();
    console.log(parsedData)

    parsedData.forEach(el => {

      profiles.innerHTML +=  `
        <div class='d-flex flex-column p-2 bg-light'>
          <img src="${el.avatar.slice(el.avatar.indexOf("uploads"))}"/>
          <h3 class='text-dark'> ${el.username} </h3>
          <h3 class='text-dark'> ${el.password} </h3>
        </div> 
      `
    })
   
    
  })();
})