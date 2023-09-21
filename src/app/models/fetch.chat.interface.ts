import { userInterface } from "./fetch.message"

export interface singleChatInterface{
    

    _id:string
    productId:string,
    latestMessage:string,
    timestamps:Date,
    sender:userInterface
}

export interface newinteface{

_id: {
    productId:string
    senderId:string 
},
chats: singleChatInterface[],

}

export interface chatResponseInterface{
chats:newinteface[]

}

