interface images {
    URL:string,
    cloudinary_id:string
}

export interface brand{
    _id:string,
    name:string,
    models:string[]
}

 interface option{
    _id:string,
    name:string
}
 interface model {
    _id:string,
    name:string,
    options:string[]
}

export interface productInterface{

    _id:string,
    brand:brand,
    model:model,
    option:option,
    user:string,
    price:number,
    year:number,
    fuel:string,
    kmDriven:number,
    Location:string,
    no_of_owners:number,
    images:images[]
    isSold:boolean,
    isBlocked:boolean

}

export interface productResponseInterface{
    err?:string,
    products?:productInterface[]
    brands?:brand[]
}

export interface SearcProductResponseInterface{
    err?:string,
    products?:productInterface[]
}

export interface productFetchInterface {

    products?:productInterface[],
    err?:string
    brands?:brand[]
}

