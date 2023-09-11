import "./style.css";

// HW :
// 1) Create profile page
// Profile page contains following parts :
// - User name
// - Photo (by default there is an image which represents question mark)
// - Date and time , when user was registered .
// *** 2) User might change an info about himself/herself

// Toggler definition
let hasAccount = false;
let authorised = false;

// DB
const accounts = [];

// DOM . Recieve documents nodes
const userName = document.querySelector("[name='nickname']");
const userPassword = document.querySelector("[name='password']");
const sendBtn = document.querySelector("#send-btn");

const btns = document.querySelector(".nav").children;

btnsReview(hasAccount, accounts, btns);

// Research
const loginBtns = [...btns].filter(
  (btn) => toLowerCase(btn.textContent) === "login"
);
const loginBtn = getFirst(loginBtns);

// Handlers

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const nickname = userName.value;
  const password = userPassword.value;

  accounts.push({ nickname, password });
  clearInputs(userName, userPassword);

  hasAccount = true;
  btnsReview(hasAccount, accounts, btns, authorised);
});

loginBtn.addEventListener("click", (e) => {
  const account = getAccount(accounts, { userName, userPassword });

  if (!account) return console.log("There is not valid data");

  authorised = true;

  btnsReview(hasAccount, accounts, btns, authorised);
});

function btnsReview(hasAccount, accounts, btns, authorised) {
  if (!hasAccount || accounts.length === 0) return;

  for (const btn of btns) {
    const btnsText = btn.textContent;
    if (!authorised && toLowerCase(btnsText) === "profile") continue;

    btn.removeAttribute("disabled");
  }
}

function getAccount(accounts, { userName, userPassword }) {
  return accounts.filter(
    (account) =>
      account.nickname === userName.value &&
      account.password === userPassword.value
  )[0];
}

// utils functions

function toLowerCase(str) {
  return str.toLowerCase();
}

function getFirst(arr) {
  return arr[0];
}

function clearInputs(...inputs) {
  for (const input of inputs) {
    input.value = "";
  }
}

//                  yyyy-mm-dd
// const date = new Date(2023, 11, 1); // 2023.11.01
// const date = new Date(); // Current : year , month , day + time + GMT format
// const date = new Date("2023-11-01"); // Current : year , month , day + time + GMT format
// const date = new Date("Novermber 13 , 2014 "); // Current : year , month , day + time + GMT format

// ! to show date on the screen u should lead it to string
// console.log("[date]", date);
