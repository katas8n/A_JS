import { IProduct } from './IProduct'

export interface IProducts {
    PRODUCTS : IProduct[],
    getProducts : () =>  IProduct[],
    addProduct : () => void,
    removeProduct : () => void,
    updateProduct : () => void,
}