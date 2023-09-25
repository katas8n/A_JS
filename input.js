const form = document.querySelector("#form");

document.querySelector("#send").addEventListener("click", (e) => {
  e.preventDefault();

  [...form.children].filter((e) => {
    if (e.tagName === "INPUT") {
      console.log("[e.value]", e.value);

      if (e.name.includes("email")) {
        console.log("Here is an Email field");
      }
    }
  });
});
