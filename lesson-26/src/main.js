// import { Currency , CurrentCurrency } from './enums';
// import { toYen , toDollar , toEuro , toPound } from './toCurrency'
// import { Toast , configureToasts } from "toaster-js";
// import './style.css';
// configureToasts({
//   topOrigin: 300,
//   deleteDelay: 100,
// });
// const inputValue = document.querySelector("#input-value") as HTMLInputElement;
// const output = document.querySelector("#output") as HTMLInputElement;
// const currency = document.getElementById("currency") as HTMLSelectElement;
// const exchangeBtn = document.getElementById("exchange") as HTMLButtonElement;
// const currentCurrency = document.getElementById("current-currency");
// let hasClicked = false;
// function callToast() {
//   let element = document.createElement("div");
//   element.textContent = "You can pass any HTML elements to Toast. Clicking on this one deletes it!";
//   element.style.position = 'absolute';
//   element.style.top = '5%';
//   element.style.left = '60%';
//   let newToast = new Toast(element, Toast.TYPE_WARN);
//   element.addEventListener('click' , () => {
//     newToast.delete();
//   })
// }
// exchangeBtn.addEventListener('click' , (event: Event) => {
//   event.preventDefault();
//   const value = inputValue.value;
//   if(!value){
//     callToast(); 
//     return ;
//   }
//   const parsedValue = parseFloat(value);
//   let result;
//   switch(currency.value) {
//     case Currency.DOLLAR :
//       result = toDollar({input : parsedValue});
//       break;
//     case Currency.POUND :
//       result = toPound({input : parsedValue});
//       break;
//     case Currency.EURO :
//       result = toEuro({input : parsedValue});
//       break;
//     case Currency.YEN :
//       result = toYen({input : parsedValue});
//       break;
//     default : 
//       break;
//   }
//   output.value = result?.toString() as string;
//   hasClicked = true;
// })
// inputValue.addEventListener('keydown' , () => {
//   if(!hasClicked) return;
//   const d = toDollar({input :  parseFloat(inputValue.value)});
//   const p = toPound({input :  parseFloat(inputValue.value)});
//   const y = toYen({input :  parseFloat(inputValue.value)});
//   const e = toEuro({input :  parseFloat(inputValue.value)});
//   const orderedCurrency = [d, p, y, e];
//   let i = 0;
//   for(const cur of currentCurrency?.children){
//     cur.textContent = orderedCurrency[i];
//   }
// })
