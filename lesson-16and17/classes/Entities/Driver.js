import { Human } from "./Human";
// import { salaries } from "../../interfaces";

export class Driver extends Human {
  constructor({ firstName, salary, job, balance, gender }) {
    super({ firstName, salary, job, balance, gender });
    this.setJob("driver");
  }
}
