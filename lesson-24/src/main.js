"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
require("./style.css");
const currentGender = {
    male: false,
    female: false,
};
var Gender;
(function (Gender) {
    Gender["MALE"] = "male";
    Gender["FEMALE"] = "female";
})(Gender || (Gender = {}));
class Person {
    constructor(name, age, gender, color) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.color = color;
        this.sayHello = () => 'Hello';
    }
}
const john = new Person("John", 23, Gender.MALE, 'john');
const form = document.querySelector("#form");
const main = document.querySelector("#main");
const createUserBTN = document.querySelector("#createUser");
const radioBtnGroup = [...(_a = document.querySelector('.radio-btn-group')) === null || _a === void 0 ? void 0 : _a.children].filter(input => input.tagName === "INPUT");
const inputs = [...form].filter(el => el.tagName === "INPUT");
for (const btn of radioBtnGroup) {
    btn.addEventListener('click', (e) => {
        let [male, female] = radioBtnGroup;
        if (e.target && e.target.name === Gender.MALE) {
            currentGender.male = true;
            currentGender.female = false;
        }
        else if (e.target && e.target.name === Gender.FEMALE) {
            currentGender.female = true;
            currentGender.male = false;
        }
        [male.value, female.value] = [currentGender.male, currentGender.female];
        [male.checked, female.checked] = [currentGender.male, currentGender.female];
    });
}
createUserBTN === null || createUserBTN === void 0 ? void 0 : createUserBTN.addEventListener('click', (event) => {
    event.preventDefault();
    const [name, age] = inputs.map(input => input.value);
    const hasFilled = radioBtnGroup.some(el => el.value === "true");
    const gender = radioBtnGroup.filter(el => el.value === "true");
    if (!hasFilled)
        return new Error("Huck you!");
    main.insertAdjacentHTML("afterbegin", `
       <input type="checkbox" />
       <h2>${name || 'Dimon'}</h2>
       <h3>${age}</h3>
       <h4>${gender[0].name}</h4>
   `);
});
