import { IProducts } from '../interfaces/IProducts';
import { IProduct } from '../interfaces/IProduct';

export class Products implements IProducts {
    
    private products = [];

    constructor(
    ) {}

    public getProducts():IProducts {
        return this.products;
    }

    public addProduct(newProduct):void {
        this.products.push(newProduct);
    } 

    public removeProduct(productID:number):void {
        this.products = this.products.filter(product => product.id !== productID);
    } 

    public updateProduct(productID:number , updatedScheme):void {
        this.products.filter(product => product.id !== productID)
    } 


}