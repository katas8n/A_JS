"use strict";
var Gender;
(function (Gender) {
    Gender["MALE"] = "male";
    Gender["FEMALE"] = "female";
})(Gender || (Gender = {}));
const person = {
    firstName: "John",
    age: 23,
    gender: Gender.MALE
};
const { firstName, age } = person;
console.log(firstName);
console.log(age);
