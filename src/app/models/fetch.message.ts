import { productInterface } from "./fetch.products.interface"

export interface SingleMessageInterface{

    _id:string
    productId:productInterface,
    status:'unread'|'delivered'|'read',
    reciverId:string,
    senderId:string,
    text:string,
    timestamps:string

}

export interface alertMessageInterface{

    _id:string
    productId:productInterface,
    status:'unread'|'delivered'|'read',
    reciverId:string,
    senderId:userInterface,
    text:string,
    timestamps:string

}


export interface UserMessagesResponseInterface{

    messages:SingleMessageInterface[],
    logedUser:string,
    product:productInterface
    recever:userInterface

}
interface userprofile {
    URL: string,
    cloudinary_id: string

}

export interface userInterface{
    _id:string,
    email:string,
    username:string,
    isBlocked:boolean,
    profile:userprofile,
    alowedCars:number
}

