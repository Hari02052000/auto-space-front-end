import { productFetchInterface, productInterface } from "src/app/models/fetch.products.interface"

export interface addBrandResponseInterface{
    brand:addBrandSuccessInterface,
    created?:boolean
    err?:string
}

export interface addModelResponseInterface{
    model:modelInterface,
    brandId:string
    created?:boolean
    err?:string
}


export interface OptionInterface{
    _id:string,
    name:string
}
export interface modelInterface{
    _id:string,
    name:string,
    options:OptionInterface[]
}

export interface addBrandSuccessInterface{
    name:string,
    models:modelInterface[],
    isListed:boolean,
    _id:string
}
export interface fetchBrandResponseInterface{
    brands:addBrandSuccessInterface[]
}

export interface addModelResponseInterface{
    model:modelInterface,
    brandId:string
    created?:boolean
    err?:string
}

export interface addBrandResponseInterface{
    brand:addBrandSuccessInterface,
    created?:boolean
    err?:string
}

export interface editBrandResponseInterface{
    edited?:boolean
    err?:string
}

export interface productListUnlistResponseInterface{
    unlisted?:boolean,
    listed?:boolean,
    id?:string
}

export interface adminFetchProductResponseInterface{
    products?:productInterface[],
    err?:string
}


