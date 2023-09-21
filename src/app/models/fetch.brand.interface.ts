export interface OptionInterface{
    _id:string,
    name:string
}
export interface modelInterface{
    _id:string,
    name:string,
    options:OptionInterface[]
}

export interface BrandInterface{
    name:string,
    models:modelInterface[],
    isListed:boolean,
    _id:string
}

export interface FetchBrandResponseInterface{
    brand?:BrandInterface[],
    err?:string

}
