// import './style.css';
// interface IProduct { 
//   title : string, 
//   imgURL : string,
//   description : string,
//   price : number,
//   ageRestricted : boolean
// }
// class Product implements IProduct {
//   constructor(
//     public title: string,
//     public description: string,
//     public price: number,
//     public ageRestricted: boolean,
//     public imgURL : string,
//   ) {}
// }
// const products = [
//   new Product("Coca-cola" , "The black water in a bottle!" ,1 , false , "../public/product-cola.png"),
//   new Product("Pepsi" , "The black water in a bottle!" ,23 , false , "../public/product-cola.png"),
//   new Product("Product#1" , "The black water in a bottle!" ,8 , true , "../public/product-cola.png"),
//   new Product("Product#2" , "The black water in a bottle!" ,12 , false , "../public/product-cola.png"),
//   new Product("Product#3" , "The black water in a bottle!" ,23 , false , "../public/product-cola.png"),
//   new Product("Product#4" , "The black water in a bottle!" ,5 , false , "../public/product-cola.png"),
//   new Product("Product#5" , "The black water in a bottle!" ,2 , false , "../public/product-cola.png"),
//   new Product("Product#6" , "The black water in a bottle!" ,23 , true , "../public/product-cola.png"),
//   new Product("Product#7" , "The black water in a bottle!" ,8 , false , "../public/product-cola.png"),
//   new Product("Product#8" , "The black water in a bottle!" ,23 , false , "../public/product-cola.png"),
//   new Product("Product#9" , "The black water in a bottle!" ,13 , true , "../public/product-cola.png"),
//   new Product("Product#10" , "The black water in a bottle!" ,3 , false , "../public/product-cola.png"),
//   new Product("Product#11" , "The black water in a bottle!" ,23 , false , "../public/product-cola.png"),
//   new Product("Product#12" , "The black water in a bottle!" ,9 , false , "../public/product-cola.png"),
//   new Product("Product#13" , "The black water in a bottle!" ,7 , false , "../public/product-cola.png"),
// ]
// let PRODUCTS_BY_DEFAULT = 6;
// function setPagination() {
//   const pageCount = Math.ceil(products.length / PRODUCTS_BY_DEFAULT);
//   const paginator = document.createElement("div");
//   paginator.className = "paginator";
//   const newArr = products.map(el => {
//     return productToHTML(el)
//   })
//   for(let i = 1 ; i <= pageCount; i++) {
//     const section = document.createElement('div');
//     section.className = "page";
//     section.textContent = i;
//     section.addEventListener('click', (e:Event) => {
//       const chosenPage =  e.target.textContent;
//       console.log(chosenPage)
//       console.log(newArr.length)
//       console.log(newArr)
//       for(const item of document.querySelector(".main").children) {
//         if(item.className !== "paginator") {
//           item.remove()
//         }
//       }
//       const finish = parseInt(chosenPage) * PRODUCTS_BY_DEFAULT;
//       const kek = newArr.slice(finish - 6,finish);
//       document.querySelector(".main")?.append(...kek);
//     })
//     paginator.append(section);
//   }
//   document.querySelector(".main")?.append(paginator);
// }
// setPagination();
// function productToHTML({title, description, price, ageRestricted, imgURL} : IProduct) : HTMLDivElement  {
//   const element = document.createElement("div");
//   element.className = "product";
//   const elTitle = document.createElement("h3");
//   elTitle.className = "product-elTitle";
//   elTitle.textContent = title;
//   const elDescription = document.createElement("p");
//   elDescription.className = "product-elDescription";
//   elDescription.textContent = description;
//   const elPrice = document.createElement("p");
//   elPrice.className = "product-elPrice";
//   elPrice.textContent = price.toString();
//   const elAgeRestriction = document.createElement('input');
//   elAgeRestriction.className =  "product-elAgeRestriction";
//   elAgeRestriction.type = "checkbox";
//   elAgeRestriction.checked = ageRestricted;
//   const img = document.createElement('img');
//   img.className =  "product-img";
//   img.src = imgURL;
//   element.addEventListener('dblclick' , (e : Event) => {
//     const currentEl = e.target.parentElement;
//     console.log(currentEl)
//     const portal = document.querySelector(".portal");
//     portal.className = "portal--active"
//   })
//   element.append(...[elTitle, elDescription, elPrice, elAgeRestriction, img]);
//   return element;
// }
// const htmlEl = products.map((product) => {
//   return productToHTML(product)
// })
// const main = document.querySelector(".main") as HTMLElement;
// main.append(...htmlEl.slice(0,PRODUCTS_BY_DEFAULT))
