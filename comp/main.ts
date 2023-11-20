enum Gender {
    MALE = "male",
    FEMALE = "female"
}

const person = {
    firstName : "John",
    age : 23,
    gender : Gender.MALE
}

const { firstName , age }= person;
console.log(firstName)
console.log(age)