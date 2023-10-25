const URL_BY_DEFAULT = "https://swapi.dev/api/";

const buttons = document.getElementsByTagName("button");

const root = document.getElementById("root");

[...buttons].forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonsID = e.target.id;

    getData(URL_BY_DEFAULT, buttonsID, root);
  });
});

async function getData(url = URL_BY_DEFAULT, specific, node) {
  const data = await fetch(url + specific);
  const parseData = await data.json();

  const preparedData = await parseData.results.map((el) => {
    return `<h3>Name : ${el.name}</h3>`;
  });

  node.innerHTML = await preparedData;
}
