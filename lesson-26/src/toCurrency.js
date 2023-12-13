"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPound = exports.toEuro = exports.toDollar = exports.toYen = void 0;
const enums_1 = require("./enums");
function toYen({ input }) {
    return input * enums_1.CurrentCurrency.YEN;
}
exports.toYen = toYen;
function toDollar({ input }) {
    return input * enums_1.CurrentCurrency.DOLLAR;
}
exports.toDollar = toDollar;
function toEuro({ input }) {
    return input * enums_1.CurrentCurrency.EURO;
}
exports.toEuro = toEuro;
function toPound({ input }) {
    return input * enums_1.CurrentCurrency.POUNDS;
}
exports.toPound = toPound;
