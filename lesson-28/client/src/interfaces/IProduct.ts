import { TYPE } from '../types/type'

export interface IProduct  {
    title : string ,
    description : string ,
    onShelf : boolean ,
    price : number ,
    props : {
        category : TYPE,
    },

    getTitle: () => string,
    getDescription: () => string,
    getOnShelf: () => boolean,
    getPrice: () => number,
    getCategory: () => string,
}