const john = {
  name: "John",
  surname: "Doe",
  getFullName() {
    return this;
  },
};

function getFullName() {
  console.log(this.name);
  console.log(this.surname);
}

// const fullname = getFullName.bind(john);
// fullname();
// getFullName.call(john);

// const result = john.getFullName();

// console.log("[result]", result);
