import { planInterface } from "src/app/models/plan.interface";

export interface fetchPlansResponseInterface{
    plans?:planInterface[]
    err?:string
}