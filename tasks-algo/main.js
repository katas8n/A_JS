const trains = [
  {
    driver: "John Doe",
    wagons: [
      {
        number: 23,
        color: "darkmagenta",
      },
      {
        number: 13,
        color: "magenta",
      },
    ],
  },
  {
    driver: "John Smith",
    wagons: [
      {
        number: 23,
        color: "darkmagenta",
      },
      {
        number: 13,
        color: "magenta",
      },
    ],
  },
];

function findByColor2(trains, expectedColor) {
  return trains.reduce((acc, cur) => {
    for (const wagon of cur.wagons) {
      const { number, color } = wagon;
      if (color === expectedColor) return wagon;

      return "There is nothing here yet."
    }
  }, []);
}

function findByColor(color) {
  const data = [];

  for (const train of trains) {
    for (const wagon of train.wagons) {
      if (color === wagon.color)
        data.push({ wagon: wagon, driver: train.driver });
    }
  }

  return data;
}

const result = findByColor("red");
const result2 = findByColor2(trains, "magenta");

console.log("[result]", result);
console.log("[result2]", result2);
