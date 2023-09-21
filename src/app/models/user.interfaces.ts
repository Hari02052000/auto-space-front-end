import { userInterface } from "./fetch.message"

export interface userLoginRequestInterface {

    email: string,
    password: string,

}
export interface userLoginResponseInterface {
    access_token?: string,
    err?: string,
    isUser?: boolean
}

export interface userprofile {
    URL: string,
    cloudinary_id: string

}


export interface singleUserInterface {

    _id: string,
    email: string,
    password: string,
    isverified: boolean,
    isBlocked: boolean,
    username: string,
    subscription: string,
    profile: userprofile


}

export interface userRegisterRequestInterface{
    
    email:string,
    password:string,
    confpassword:string,
    username:string

}
export interface userRegisterResponseInterface{
    access_token?:string,
    err?:string,
    userCreated?:string,
    email?:string
}

export interface userData{
    loged: boolean,
    unreadMessages: number,
    user : userInterface

}