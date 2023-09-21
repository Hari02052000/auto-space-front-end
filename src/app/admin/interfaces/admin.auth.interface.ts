export interface adminLoginRequestInterface{
    
    email:string,
    password:string,

}
export interface adminLoginResponseInterface{
    access_token?:string,
    err?:string,
    isAdmin?:boolean
}