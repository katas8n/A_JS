import "./style.css";

const app = document.querySelector("#app");

const fieldsets = [
  {
    id: "user-name",
    className: "name",
  },
  {
    id: "phone-number",
    className: "phone-number",
  },
];

const labels = [
  {
    htmlFor: "name",
    textContent: "User name : ",
  },
  {
    htmlFor: "phone-number",
    textContent: "Phone number  : ",
  },
];

const inputs = [
  {
    tagName: "input",
    className: "input--correct",
    name: "name",
    id: "name",
  },
  {
    tagName: "input",
    className: "input--correct",
    name: "phone-number",
    id: "phone-number",
  },
];

const submit = {
  id: "submit-btn",
  className: "submit-btn",
  textContent: "Submit",
};

const htmlStructure = fieldsets.map((fieldset, i) => {
  const label = labels.filter(
    (label, i) => fieldset.className === label.htmlFor
  )[0];

  const input = inputs.filter((input, i) => fieldset.className === input.id)[0];

  return `
    <fieldset id=${fieldset.id} class=${fieldset.className}>
      <label htmlFor=${label.htmlFor}>
         ${label.textContent}
      </label>

      <${input.tagName} 
        className=${input.className} 
        id=${input.id}
        name=${input.name}
      />
    </fieldset>
  `;
});

htmlStructure.push(`
  <button id=${submit.id} id=${submit.className}>
    Submit
  </button>
`);

const form = [...app.children].filter((el) =>
  el.className.includes("modal-window")
)[0];

form.innerHTML += htmlStructure;

const htmlInputs = [];

[...form.children].forEach((el) => {
  [...el.children].forEach((item) => {
    if (item.tagName === "INPUT") {
      htmlInputs.push(item);
    }
  });
});

document.getElementById("submit-btn").addEventListener("click", (e) => {
  e.preventDefault();

  const inputsValues = {
    name: "",
    phoneNumber: "",
  };

  htmlInputs.forEach((input) => {
    if (input.id === "name") inputsValues.name = input.value;
    if (input.id === "phone-number") inputsValues.phoneNumber = input.value;

    const firstThreeCharacters = inputsValues.phoneNumber.split("").slice(0, 3);
    console.log("[fi]", firstThreeCharacters);
    console.log(`(${firstThreeCharacters.join("")}) `);
  });
});
