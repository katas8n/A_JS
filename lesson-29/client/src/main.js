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
const getNames = document.querySelector("#getNames");
const getSurnames = document.querySelector("#getSurnames");
const postName = document.querySelector("#postName");
getNames === null || getNames === void 0 ? void 0 : getNames.addEventListener("click", () => {
    (function () {
        return __awaiter(this, void 0, void 0, function* () {
            const serverData = yield fetch("http://localhost:3000/names");
            const parsedData = yield serverData.json();
            console.log(parsedData);
        });
    })();
});
getSurnames === null || getSurnames === void 0 ? void 0 : getSurnames.addEventListener("click", () => {
    (function () {
        return __awaiter(this, void 0, void 0, function* () {
            const serverData = yield fetch("http://localhost:3000/surnames");
            const parsedData = yield serverData.json();
            console.log(parsedData);
        });
    })();
});
postName === null || postName === void 0 ? void 0 : postName.addEventListener("click", () => {
    (function () {
        return __awaiter(this, void 0, void 0, function* () {
            const serverData = yield fetch("http://localhost:3000/names", {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({ name: "Michael, davai vse po novoi!" })
            });
            const parsedData = yield serverData.json();
            console.log(parsedData);
        });
    })();
});
