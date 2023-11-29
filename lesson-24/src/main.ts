import './style.css'
// Swap 

// const people = [ 8 , 9 , 12 , 3 , 32 ];

// function swap(arr: number[] , firstIndex: number , secondIndex: number): void {
//   const copyOfFirstEl = arr[firstIndex];

//   arr[firstIndex] = arr[secondIndex];
//   arr[secondIndex] = copyOfFirstEl;

// }

// function sort(arr:number []) : number[] {
//   const arrLen = arr.length;

//   for(let i = 1 ; i < arrLen ; i++){ 
//     const element = arr[i];
//     let prevElement = i - 1;
    

//    while (prevElement >= 0 && arr[prevElement] > element){
//     arr[prevElement + 1] = arr[prevElement]

//     prevElement--;
//    }

//    arr[prevElement + 1] = element;
//   }

//   return arr;
// }

// const result = sort(people);
// console.log(result)

// class Admin {
//     private isAdmin : boolean = false; 
//     protected name : string = "Typical admin"

//     constructor (
//         name: string,
//         isAdmin : boolean
//     ){

//     }

//     public getIsAdmin (){
//         return this.isAdmin
//     }
// }

// class SuperAdmin extends Admin {
//     constructor(name:string,isAdmin:boolean){
//         super(name , isAdmin);
//     }
// }

// const admin = new SuperAdmin("John" , false);
// console.log(admin)

// const john = new Person("John", 23 , Gender.MALE);
// john.name = "Kek";
// console.log(john)
type color = 'blue' | "green" | "john";

const currentGender = {
    male : false ,
    female : false ,
}

enum Gender {
    MALE = 'male',
    FEMALE = 'female'
}

interface User {
    readonly name: string,
    age? : number , 
    gender? : Gender.MALE | Gender.FEMALE,
    color? : color,
    sayHello? : () => string
}

class Person implements User {
    constructor(
        public name: string,
        public age : number,
        public gender : Gender.MALE | Gender.FEMALE,
        public color : color 
    ){

    }

    sayHello = ()  => 'Hello'
}
const john = new Person("John" , 23 , Gender.MALE , 'john');


const form = document.querySelector("#form") as HTMLFormElement; 
const main = document.querySelector("#main") as HTMLFormElement; 
const createUserBTN = document.querySelector("#createUser") as HTMLButtonElement;
const radioBtnGroup = [...document.querySelector('.radio-btn-group')?.children].filter(input => input.tagName === "INPUT");

const inputs = [...form].filter(el => el.tagName === "INPUT");

for(const btn of radioBtnGroup){
    btn.addEventListener('click' , (e) => {
        let [male , female] = radioBtnGroup;
        
        if(e.target && e.target.name === Gender.MALE){
            currentGender.male = true;
            currentGender.female = false;

        } else if(e.target && e.target.name === Gender.FEMALE){
            currentGender.female = true;
            currentGender.male = false;
        }
        
        [male.value, female.value] = [currentGender.male, currentGender.female];
        [male.checked, female.checked] = [currentGender.male, currentGender.female];

    })  
}

createUserBTN?.addEventListener('click' , (event : Event) => {
    event.preventDefault();

   const [ name, age ]  = inputs.map(input => input.value);

   const hasFilled = radioBtnGroup.some(el => el.value === "true");

   const gender = radioBtnGroup.filter(el => el.value === "true");

   if(!hasFilled) return new Error("Huck you!");

   main.insertAdjacentHTML("afterbegin", `
       <input type="checkbox" />
       <h2>${name || 'Dimon'}</h2>
       <h3>${age}</h3>
       <h4>${gender[0].name}</h4>
   `)
   
  
})