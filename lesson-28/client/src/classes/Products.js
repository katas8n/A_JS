"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
class Products {
    constructor() {
        this.products = [];
    }
    getProducts() {
        return this.products;
    }
    addProduct(newProduct) {
        this.products.push(newProduct);
    }
    removeProduct(productID) {
        this.products = this.products.filter(product => product.id !== productID);
    }
    updateProduct(productID, updatedScheme) {
        this.products.filter(product => product.id !== productID);
    }
}
exports.Products = Products;
