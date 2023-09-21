export interface addBrandResponseInterface{
    brand:addBrandSuccessInterface,
    created?:boolean
    err?:string
}

export interface addModelResponseInterface{
    brand:addBrandSuccessInterface,
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