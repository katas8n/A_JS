import { AGE_BY_DEFAULT, REL_BY_DEFAULT } from "../../constants";
// import { salaries } from "../../interfaces";

export class Human {
  // Class fields
  #firstName;
  #age;
  #salary;
  #job;
  #balance;
  #gender;
  #rel;
  #avatar;
  #inventory;
  constructor({ firstName, salary, job, balance, gender, avatar }) {
    // # - is a modifier , make put attr to privat section
    this.#firstName = firstName;
    this.#age = AGE_BY_DEFAULT;
    this.#salary = salary || 0;
    this.#job = job || null;
    this.#balance = balance;
    this.#gender = gender;
    this.#rel = REL_BY_DEFAULT;
    this.#avatar = avatar;
    this.#inventory = [];
  }

  getInventory() {
    return this.#inventory;
  }

  setInventory(inventory) {
    this.#inventory = inventory;
  }

  getRel() {
    return this.#rel;
  }

  setRel(rel) {
    this.#rel = rel;
  }

  getGender() {
    return this.#gender;
  }

  setGender(gender) {
    this.#gender = gender;
  }

  getBalance(balance) {
    return this.#balance;
  }

  setBalance(balance) {
    this.#balance = balance;
  }

  getAge() {
    return this.#age;
  }

  setAge(age) {
    this.#age = age;
  }

  getJob() {
    return this.#job;
  }

  setJob(job) {
    this.#job = job;
    this.setSalary(salaries.filter((el) => el.job === job)[0].salary);
  }

  getName() {
    return this.#firstName;
  }

  setName(firstName) {
    this.#firstName = firstName;
  }

  getSalary() {
    return this.#salary;
  }

  setSalary(salary) {
    this.#salary = salary;
  }

  getAvatar() {
    return this.#avatar;
  }

  setAvatar(avararLink) {
    this.#avatar = avararLink;
  }
}
