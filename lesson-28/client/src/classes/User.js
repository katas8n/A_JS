"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const roles_1 = require("../enums/roles");
class User {
    constructor() {
        this.login = "";
        this.password = "";
        this.isAdmin = roles_1.Role.CUSTOMER;
    }
}
exports.User = User;
