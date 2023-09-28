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

unreadCount: number


}

export interface chatResponseInterface{
chats:newinteface[]

}
// {
//     _id: {
//       productId: new ObjectId("650d30c7a5403f55bcb26fee"),
//       senderId: new ObjectId("650bf15eee8e007368f2569a")
//     },
//     chats: [ [Object] ],
//     unreadCount: 0
//   }
