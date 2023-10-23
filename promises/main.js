const people = document.querySelector("#people");
const starships = document.querySelector("#starships");
const vehicles = document.querySelector("#vehicles");
const planets = document.querySelector("#planets");

// Re-write function (more efficient way)
async function getData() {
  // promise

  //   fetch
  const data = await fetch("https://swapi.dev/api/${}");
  const parseData = await data.json();

  await parseData.results.forEach((el) => {
    console.log("[el]", el);
  });

  return parseData;
}

people.addEventListener("click", () => {
  console.log("[getData]", getData());
});

// Get starship
starships.addEventListener("click", () => {});
// Get vehicles
vehicles.addEventListener("click", () => {});
// Get planets
planets.addEventListener("click", () => {});

// ***
// If button is clicked it returns data ,
// then lead data to HTML and append on the screen
