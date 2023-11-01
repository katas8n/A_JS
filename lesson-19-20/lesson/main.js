import { toCapitalize, render } from "./utils";

import "./style.css";

const BASE_IS_ACTIVE_STATUS = false;
const BASE_BTN_CLASSNAME = "btn";
const URL_BY_DEFAULT = "https://swapi.dev/api/";
const MODIFIER = "--active";

const nav = document.getElementById("nav");
const main = document.querySelector(".main");

const urls = ["people", "films", "starships"];

const promises = urls.map((url) => fetch(URL_BY_DEFAULT + url));

// Send requests
// -> returns an array of handled promises
Promise.all(promises).then((res) => {
  // -> handles promises via .json() -> returns [{},... (js objects)]
  return Promise.all(
    res.map((pr, i) => {
      return pr.json();
    })
  )
    .then((res) => {
      let SCREEN_IMAGE = [];

      const BTNS_IMAGE = urls.map((url) => {
        return {
          tagName: "button",
          className: BASE_BTN_CLASSNAME,
          id: url,
          textContent: toCapitalize(url),
          isActive: BASE_IS_ACTIVE_STATUS,
        };
      });

      const btns = BTNS_IMAGE.map((btnImage) => {
        const btn = document.createElement(btnImage.tagName);

        btn.className = btnImage.className;
        btn.id = btnImage.id;
        btn.textContent = btnImage.textContent;

        btn.addEventListener("click", () => {
          res.forEach((el, i) => {
            // i - index of res array
            // res array has indexes
            //
            // urls[i] and el[i] -> the same number
            // [ { ... , results : ... }  , {.... , results : ....}]
            if (btn.id === urls[i]) {
              BTNS_IMAGE[i].isActive = !BTNS_IMAGE[i].isActive;

              const props = SCREEN_IMAGE.map((item) => {
                for (const prop in item) {
                  return prop;
                }
              });

              if (BTNS_IMAGE[i].isActive) {
                const current = btn.className;
                btn.className = [current, MODIFIER].join("");

                if (!props.includes(btn.id)) {
                  SCREEN_IMAGE.push({
                    [btn.id]: el.results,
                  });
                }
              } else {
                btn.className = btn.className.split("--")[0];
                props.forEach((el, i) => {
                  if (el === btn.id) {
                    SCREEN_IMAGE = [
                      ...SCREEN_IMAGE.slice(i + 1),
                      ...SCREEN_IMAGE.slice(0, i),
                    ];
                  }
                });
              }

              const ACTUAL_SCREEN = [];

              SCREEN_IMAGE.forEach((el) => {
                for (const key in el) {
                  const value = el[key];

                  ACTUAL_SCREEN.push(...value);
                }
              });

              const newData = ACTUAL_SCREEN.map((name) => {
                const element = document.createElement("div");
                element.textContent = name.name ? name.name : name.title;

                return element;
              });

              render(main, newData);
            }
          });
        });

        return btn;
      });

      nav.append(...btns);
    })
    .catch((rej) => {
      console.log("[rej]", rej);
    });
});
