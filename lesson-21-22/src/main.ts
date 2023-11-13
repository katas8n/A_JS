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
// type colors = "darkmagenta" | "magenta" | "cyan" | "darkblue" | "yellow";

// interface ICarriage {
//     id : number;
//     color : colors;
// }

// interface ITrain {
//     driver : string;
//     carriages : ICarriage[];
// }

// class Train { 
//     constructor({driver , carriages} :ITrain) {
//         this.driver = driver;
//         this.carriages = carriages;
//     }

//     searchByColorDeclarative(color:string) : ICarriage[]{

//         const data = [];

//         for(const carriage of this.carriages){
//             if(carriage.color === color) {
//                 data.push(carriage);
//             }
//         }

//         return data;

//     }

//     searchByColorImperative(color:string): ICarriage[] {
//        return this.carriages.filter(carriage => carriage.color === color)
//     }
// }

// const train = new Train({driver : "John" , carriages : [
//     {
//         id : 8,
//         color : "darkmagenta"
//     },
//     {
//         id : 9,
//         color : "cyan"
//     },
//     {
//         id : 10,
//         color : "yellow"
//     },
//     {
//         id : 11,
//         color : "darkblue"
//     },
// ]})

// const results = train.searchByColorDeclarative("yellow");
// const resultsIMP = train.searchByColorImperative("yellow");
// console.log(resultsIMP);

// ! CONSTANTS 
// const BASE_URL = "https://jsonplaceholder.typicode.com";
// const ACTIVE_STATUS = "--active";

// ! DOM
// const text = document.querySelector('#text') as HTMLElement;
// const mainImg = document.querySelector('#main-img') as HTMLImageElement;


// enum ButtonsFunctions {
//     GET = "Get",
//     HIDE = "Hide"
// }

// enum ButtonsLinks {
//     PHOTOS = 'photos',
//     POSTS = 'posts',
// }

// const header = document.querySelector(".header") as HTMLElement;

// header.addEventListener('click' , (e) => {
//     const currentButton = e.target as HTMLElement;

//     if (currentButton.tagName !== "BUTTON") return;

//     const textContent = currentButton.textContent;

//     const getPhotosCondition = textContent?.includes(ButtonsLinks.PHOTOS) 
//     && textContent?.includes(ButtonsFunctions.GET);

//     const getPostsCondition = textContent?.includes(ButtonsLinks.POSTS) 
//     && textContent?.includes(ButtonsFunctions.GET);

//     const hidePhotosCondition = textContent?.includes(ButtonsLinks.PHOTOS) 
//     && textContent?.includes(ButtonsFunctions.HIDE);

//     const hidePostsCondition = textContent?.includes(ButtonsLinks.POSTS) 
//     && textContent?.includes(ButtonsFunctions.HIDE);

//     if (getPhotosCondition) {
//         getDataByEnpoing(BASE_URL,ButtonsLinks.PHOTOS);
//     }
//     else if (getPostsCondition) {
//         getDataByEnpoing(BASE_URL,ButtonsLinks.POSTS);
//     }
//     else if (hidePhotosCondition){
//         //!  To function
//         const imagesClassName = mainImg?.className;

//         if(imagesClassName?.includes(ACTIVE_STATUS)) {
//             const indexOfStart = imagesClassName.indexOf(ACTIVE_STATUS);
//             const slicedPart = imagesClassName.slice(0,indexOfStart);
//             mainImg.className = slicedPart;
//             mainImg.style.display = 'none';
//         }else {
//             mainImg.className += ACTIVE_STATUS;
//             mainImg.style.display = 'block';
//         }
//     }
//     else if(hidePostsCondition) {
//         const parClassName = text?.className;
//         console.log(parClassName)

//         if(parClassName?.includes(ACTIVE_STATUS)) {
//             const indexOfStart = parClassName.indexOf(ACTIVE_STATUS);
//             const slicedPart = parClassName.slice(0,indexOfStart);
//             text.className = slicedPart;
//             text.style.display = 'none';
//             console.log(text)
//         }else {
//             text.className += ACTIVE_STATUS;
//             text.style.display = 'block';
//         }
//     }
//     else {
//         console.error("Error!");
//     }
// })

// async function getDataByEnpoing(url:string, endpoint:string) {
//     const data = await fetch(`${url}/${endpoint}`);
//     const parsedData = await data.json();

//     if(endpoint === 'photos'){
//         const randomPhoto = parsedData[generateRandomNumber(parsedData.length)].url;
//         mainImg.src = randomPhoto;
//     }else if(endpoint === 'posts') {
//         const randomPost = parsedData[generateRandomNumber(parsedData.length)].body;
//         text.textContent = randomPost;
//     }

//     console.log(parsedData)
// }

// function generateRandomNumber(range : number){
//     return Math.floor(Math.random() * range)
// }

// BIG O 





// HW


// ....1
// 1. Imagine that we have an arr 
// 2. Arr contains "Hello" , "World" , "Bob" , "John"
// 3. Write function which will swap elements by it's index 

// ....2
//  Let's assume we have shop and we sell body parts
// We should create CMS to create content on the site .
// CMS should give us following functionality : 
// 1. Add new product 
// 2. Remove product
// 3. Update product 
// 4. Input as a search-panel , which will find elements by it`s props { prop : value } or title 
// 5. Add filters by assess (1-5)