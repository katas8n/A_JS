export class BaseCity {
  #population;
  #eco;
  #rating;
  #crimeRate;
  #size;
  constructor({ population, eco, rating, crimeRate, size }) {
    this.#population = population;
    this.#eco = eco;
    this.#rating = rating;
    this.#crimeRate = crimeRate;
    this.#size = size;
  }

  setPopulation(value) {
    this.#population = value;
  }

  setRating(value) {
    this.#rating = value;
  }
}
