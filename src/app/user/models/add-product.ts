import { images, productInterface } from "src/app/models/fetch.products.interface"

export interface AddproductResponseInterface{
    productAdded?:boolean,
    err?:string,
    email?:string
}
export interface singleproducttResponseInterface{
    product?:productInterface
    err?:string
}

export interface postedproducttResponseInterface{
    products?:productInterface[]
    err?:string
}
export interface imageRemovedResponseInterface{
    imageRemoved?:boolean,
    err?:string
}

export interface imageuploadResponseInterface{
    uploaded?:boolean,
    images?:images[],
    err?:string
}

export interface updateProductResponseInterface{
    updated?:boolean,
    err?:string
}

export interface marksoldInterface{
    marked?:boolean
}