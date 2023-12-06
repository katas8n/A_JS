import './style.css';

const app = document.querySelector("#app") as HTMLElement;
const header = document.querySelector(".header");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");
const appDashboard = document.querySelector("#app-dashboard");
const appLogin = document.querySelector("app-login");


(async function(){
  const serverData = await fetch("http://localhost:3000/");
  const parsedData = await serverData.json();


  console.log(parsedData);
})();


(async function(){
  const serverData = await fetch("http://localhost:3000/isAdmin");
  const parsedData = await serverData.json();


  console.log(parsedData);
})();


const components = [
  {
    name : "dashboard",
    isVisible : false,
    component : appDashboard
  },
  {
    name : "login",
    isVisible : true,
    component : appLogin
  }
]


console.log(components)



