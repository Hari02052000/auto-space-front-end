import { productInterface } from "src/app/models/fetch.products.interface"

export interface AddproductResponseInterface{
    productAdded?:boolean,
    err?:string
}
export interface singleproducttResponseInterface{
    product?:productInterface
    err?:string
}

export interface postedproducttResponseInterface{
    products?:productInterface[]
    err?:string
}
