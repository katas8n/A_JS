import "./style.css";

const people = [];
const starships = [];
const films = [];

const URL_BY_DEFAULT = "https://swapi.dev/api/";

const urls = ["people", "films", "starships"];

const promises = urls.map((url) => fetch(URL_BY_DEFAULT + url));

Promise.all(promises).then((res) => {
  return Promise.all(res.map((pr) => pr.json()))
    .then((res) => {
      res.forEach((el) => {
        console.log("[el.results]", el.results);
      });
    })
    .catch((rej) => {
      console.log("[rej]", rej);
    });
});
