// const categories = {
//     drama : [
//         {
//             title : "Lord of the rings",
//             rating : 5,
//             description : "There is a story about ..."
//         },
//         {
//             title : "Harry Potter",
//             rating : 5,
//             description : "There is a story about ..."
//         },
//     ],
//     comedy : [
//         {
//             title : "Friends",
//             rating : 4 ,
//             description : "There is a story about friends"
//         },
//         {
//             title : "The Alf",
//             rating : 4 ,
//             description : "There is a story about Alf"
//         },
//     ]
// };

// let isRunning = true ; 
// let i = 0 ;

// while(isRunning){
//         const userChoice = prompt("Hi , there! U might : 1) Add new category 2) Show films 3) Add new film 4) Quit");   

//         switch(userChoice) {
//             case '1':
//                 addCategory(categories);
//                 break;  

//             case '2' :
//                 showFilmsByCategory(categories);
//                 break;

//             case '3':
//                 addFilm(categories);

//             case '4' :
//                 isRunning = false;
            
//             default :
//                 console.log("There is an error into ur message");
//                 break;
//         }

//         isRunning = isStop();


// }

// function isStop() {
//     return confirm("Do you want to use our programm futher.");
// };

// function showFilmsByCategory(films) {
//     for(const category in films) {
//         const value = films[category]
       
//         if(category === "drama") {
//             console.log('[value]', value);
//         }else if(category=== "comedy"){
//             console.log('[value]', value);
//         }else {
//             console.log('[value]', value);
//         }
//     }
// }

// function addCategory(categories) {
//     const newCategory = prompt("What is the category that you gonna add here ?")
//     categories[newCategory] = [];


//     console.log(categories);
// }

// function Film(title, rating,description) {
//     return {
//         title ,
//         rating,
//         description
//     }
// }

// function addFilm(categories) {
//     const keys = Object.keys(categories)

//     console.log('[keys]', keys);
//     const pickedCategory = prompt(`Choose category which we will use : ${keys}`);

//     if(pickedCategory in categories){
//         const title = prompt("Enter a title of a film");
//         const description = prompt("Describe what that film is about ?");
//         const rating = prompt("Enter rating of the film ");

//         const newFilm = new Film(title,rating,description);

//         categories[pickedCategory].push(newFilm);
//     }
//     return pickedCategory;
// }


// let isRunning = true ;

// const categories = ['drama' , 'sport' , 'fight', 'war' , 'adventure'];

// while(isRunning) {
//     const userChoice = prompt("Enter something from this list : " + categories.join(','));

//     for(const category of categories){
//         if(category === userChoice){
//             isRunning = false;
//         }else {
//             console.log("There is an error!");
//         }
//     }
// }
// class Hero {
//     constructor(name, damage,hp) {
//         this.name = name ;
//         this.damage = damage ;
//         this.hp = hp;
//     }

//     attack(anotherHero) {
//         anotherHero.hp =  anotherHero.hp - this.damage;

//         return anotherHero.hp
//     }
// }

// class User {
//     constructor(name, email,password) {
//         this.name = name ;
//         this.email = email ;
//         this.password = password;
//     }

//     getFullData() {
//         return this;
//     }

//     getPassword(){
//         return this.password;
//     }

//     getEmail(){
//         return this.email;
//     }

//     getName(){
//         return this.name;
//     }
// }

// const hero = new Hero("John" , 23 , 100);
// const hero2 = new Hero("<MIKE>" , 23 , 50);

// const mikesHp = hero.attack(hero2);

// console.log('[mikesHp]', mikesHp);

// class User {
//     NAME_BY_DEFAULT = "Unknown";

//     constructor(name){
//         //{} 
//         this.name = name;
//         this.validateName();
//     }

//     validateName() {
//         if(!this.name){
//             this.name = this.NAME_BY_DEFAULT;
//         }
//     }
// }

// const user = new User();

// console.log('[user]', user);

// class Film {
//     constructor(title) {
//         this.title = title
//         this.slug = this.createSlug()
//     }

//     createSlug(){
//         return this.title.split(" ").join("-").toLowerCase();
//     }
// }

// const harryPotter = new Film("Harry potter");

// console.log('[harryPotter]', harryPotter);

// function sayHello() {
//     console.log("Hello!");
// }

// function wrapperOverSayHello(callback) {
//     callback();
//     console.log('13');
// }

// console.log('[sayHello]', sayHello);

// wrapperOverSayHello(sayHello)

// FI - first IN!!!!
// LO - last out!!!!
// function func1() {
//     console.log("Func1");
//     func2()

// }

// function func2() {
//     console.log("Func2");
//     func3()

// }

// function func3() {
//     console.log("Func3");
//     func4()

// }

// function func4() {
//     console.log("Func4");
// }

// func1()