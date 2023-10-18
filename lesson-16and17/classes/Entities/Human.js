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
  }

  getAvatar() {
    return this.#avatar;
  }

  setAvatar(newAvararLink) {
    this.#avatar = newAvararLink;
  }

  setSalary(salary) {
    this.#salary = salary;
  }

  setJob(job) {
    this.#job = job;
    this.setSalary(salaries.filter((el) => el.job === job)[0].salary);
  }

  getName() {
    return this.#firstName;
  }

  getSalary() {
    return this.#salary;
  }
}
