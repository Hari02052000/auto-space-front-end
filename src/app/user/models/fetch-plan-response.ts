import { planInterface } from "src/app/models/plan.interface";

export interface FetchPlanResponseInterface{
    plans?:planInterface[]
    err?:string
}

export interface subscriptionResponseInterface{
    subscribed?:boolean,
    payed?:boolean,
    err?:string,
    order?:any,
    isOnline?:boolean
}

export interface veriPaymentResponseInterface{
    isPayed:boolean
}