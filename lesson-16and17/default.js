import { Human } from "./classes";
import { getRandomNumber } from "./utils/getRandomNumber";
import { genders } from "./interfaces/gender";

export const PERSON_BY_DEFAULT = [
  new Human({
    firstName: "John",
    job: null,
    balance: 1000000,
    salary: 0,
    gender: genders.male,
  }),
  new Human({
    firstName: "Mike",
    job: null,
    balance: 100000,
    salary: 0,
    gender: genders.male,
  }),
  new Human({
    firstName: "Bob",
    job: null,
    balance: 10,
    salary: 0,
    gender: genders.male,
  }),
  new Human({
    firstName: "Jim",
    job: null,
    balance: -2000,
    salary: 0,
    gender: genders.male,
  }),
];
