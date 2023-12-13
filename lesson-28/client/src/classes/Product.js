"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(title = "", description = "", onShelf = false, price = 0, props = {}) {
        this.title = title;
        this.description = description;
        this.onShelf = onShelf;
        this.price = price;
        this.props = props;
    }
    getTitle() {
        return this.title;
    }
    getDescription() {
        return this.description;
    }
    getOnShelf() {
        return this.onShelf;
    }
    getPrice() {
        return this.price;
    }
    getCategory() {
        var _a;
        return (_a = this.props) === null || _a === void 0 ? void 0 : _a.category;
    }
}
exports.Product = Product;
