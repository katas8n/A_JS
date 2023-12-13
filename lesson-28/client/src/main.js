"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./style.css");
const app = document.querySelector("#app");
const header = document.querySelector(".header");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");
const appDashboard = document.querySelector("#app-dashboard");
const appLogin = document.querySelector("app-login");
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        const serverData = yield fetch("http://localhost:3000/");
        const parsedData = yield serverData.json();
        console.log(parsedData);
    });
})();
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        const serverData = yield fetch("http://localhost:3000/isAdmin");
        const parsedData = yield serverData.json();
        console.log(parsedData);
    });
})();
const components = [
    {
        name: "dashboard",
        isVisible: false,
        component: appDashboard
    },
    {
        name: "login",
        isVisible: true,
        component: appLogin
    }
];
console.log(components);
