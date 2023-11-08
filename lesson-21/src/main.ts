import './style.css';

// const button = document.getElementById("calc");
// const form = document.querySelector("#form") as HTMLFormElement;


// types : strings , boolean , number , null , undfined , object 
// function add(num1:number , num2: number) {
//   return num1 + num2
// }

// function calc (e:any) : void {
//   e.preventDefault();

//   const inputs = getFormInputs(form);

//   const firstN = parseInt(inputs[0].value);
//   const secondN = parseInt(inputs[1].value);

//   if(typeof firstN === 'number' && typeof secondN === 'number'){
//     const result = add(secondN,firstN);

//     console.log(result)
//   }else {
//     console.log("Type error!")
//   }


// }

// function getFormInputs(form:HTMLFormElement) : HTMLInputElement[] {
//   return [...form.children].filter((el) => el.tagName === "INPUT")
// }

// button?.addEventListener('click' , calc)

// console.log("Hello TS")

// ! HW
// const tv : {
//   label : string;
//   // category might be string , or number
//   // | - union
//   category : string | number;
//   description : string;
//   price : number;
// } =   {
//   label : "Sony",
//   category :"TV",
//   description : "SuperPupperMegaTV",
//   price : 123
// }

// tuple
// const kek : [number , string , boolean] = [1,"hello" , false]
// console.log(kek[0])

// Interface is a possible way to describe an object 

// Type aliases
// type CategoryTV = "TV"  

// let isRunning = true;

// enum Category {
//   // 0
//   // TV = 0 
//   TV = "TV",
//   // 1 
//   Smartphone  = "Smartphone", 
//   // 2
//   mp3 = "mp3"
// }

// type IsBestseller = 'yep' | 'nope' | "kek";

// interface IProduct {
//   // union type
//   label : string | number , 
//   category : Category ,
//   description : string,
//   price : number,
//   isBestseller? : IsBestseller
// }

// const products : IProduct[] = [
//   {
//     label : "Sony",
//     category : Category.TV,
//     description : "SuperPupperMegaTV",
//     price : 123,
//     isBestseller : 'kek'
//   },
//   {
//     label : "Bony",
//     category : Category.TV,
//     description : "SuperPupperMegaTV",
//     price : 223
//   },
//   {
//     label : "LG",
//     category : Category.TV,
//     description : "SuperPupperMegaTV",
//     price : 228
//   },
//   {
//     label : "Samsung",
//     category : Category.Smartphone,
//     description : "SuperPupperMegaTV",
//     price : 123
//   },
//   {
//     label : "Apple",
//     category :  Category.Smartphone,
//     description : "SuperPupperMegaSmartphone",
//     price : 223
//   },
//   {
//     label : "LG",
//     category :  Category.Smartphone,
//     description : "SuperPupperMegaSmartphone",
//     price : 228
//   },
//   {
//       label : "Sony",
//       category : Category.mp3,
//       description : "SuperPupperMegaTV",
//       price : 128
//   },
//   {
//     label : "Apple",
//     category :Category.mp3,
//     description : "SuperPupperMegamp3",
//     price : 38
//   },
//   {
//     label : "LG",
//     category :Category.mp3,
//     description : "SuperPupperMegamp3",
//     price : 118
//   },
// ]

// function findByCriteria(criteria:string){
//   let hasFound = false;
//   let foundCriteria:any;

//   switch(criteria) {
//     case Category.Smartphone:
//       foundCriteria = Category.Smartphone;
//       hasFound = true;
//       break;
//     case Category.TV:
//       foundCriteria = Category.TV;
//       hasFound = true;
//       break;
//     case Category.mp3:
//       foundCriteria = Category.mp3;
//       hasFound = true;

//       break;
//     default : console.error("There is nothing here yet , by pointed criteria")

//   }

//   if(!hasFound) return "There is nothing here yet"

//   return products.filter(el => {
//     if(el.category === foundCriteria) {
//       return el
//     }
//   })
// }


// while(isRunning) {
//   const section = prompt("1) All products 2) Filter 3) Exit");

//   switch(section) {
//     case "1":
//       console.table(products)
//       break;
      
//     case "2":
//       const criteria = prompt("Choose one of following categories (,) : \nTV\nSmartphone\nmp3") as string;

//       const foundProducts = findByCriteria(criteria);
//       console.log(foundProducts)
//       break;

//     case "3":
//       isRunning = false;
//       break;

//     default : break;
//   }
  
// }

// const data = fetch("http://swapi.dev/api/planets/");
// data.then((val) => {
//  return val.json()
// }).then(val => {
//   console.log(val)
// })

// async function getData () {
  
//   const data = await fetch("http://swapi.dev/api/planets/");
//   const parsedData = await data.json();

//   console.log(parsedData)


// };

// getData()


// Algo 

// Trains [ driver = "John" , carriages : [ { color : darkmagenta , id : 8 } , { color : blue , id : 8 } , { color : yellow , id : 8 } ]] --- [  driver = "Jim"  , carriages : [ { color : darkmagenta , id : 8 } ]] --- [ driver = "Mike"  , carriages : [ { color : darkmagenta , id : 8 } ]] --- [ driver = "Tyson" , carriages : [ { color : darkmagenta , id : 8 } ]]

// functions : 
//  1) Find carriage by color -> return name of driver and id of carriadge and color 
//  2)  Find carriage by id
//  3)  Find carriage by color or id  

// * TS optional