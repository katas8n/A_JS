import { BaseCity } from "./BaseCity";

export class Megapolice extends BaseCity {
  constructor({ population, eco, rating, crimeRate, size }) {
    super({ population, eco, rating, crimeRate, size });
    this.setPopulation(1000000);
    this.setRating(5);

    this.hasMetro = true;
  }
}
