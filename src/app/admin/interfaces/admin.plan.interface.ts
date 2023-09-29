import { planInterface } from "src/app/models/plan.interface";

export interface fetchPlansResponseInterface{
    plans?:planInterface[]
    err?:string
}
export interface addplanResponseInterface{
    isPlanAdded?:boolean
    plan?:planInterface
    err?:string
}

export interface editplanResponseInterface{
    edited?:boolean
    plan?:planInterface
    err?:string
}