import { IProduct } from '../interfaces/IProduct';
import { CategoryType } from '../enums/categories';

export class Product implements IProduct {

    constructor(
        private title:string = "",
        private description:string = "",
        private onShelf:boolean = false,
        private price:number = 0,
        private props:any = {},
    ) {}

    getTitle():string {
        return this.title;
    }

    getDescription():string {
        return this.description;
    }

    getOnShelf():boolean {
        return this.onShelf;
    }

    getPrice():number {
        return this.price;
    }

    getCategory():CategoryType {
        return this.props?.category
    }

}