import { userInterface } from "src/app/models/fetch.message"

export interface FetchUserResponseInterface{
    users?:userInterface[]
    err?:string

}

export interface userBlockUnBlockResponseInterface{
    unBlocked?:boolean,
    blocked?:boolean,
    id?:string
}