
export interface otpVerificationResponseInterface{
  err?:string,
  verification?:boolean
}

export interface emailVerificationResponseInterface{
    isUserEmail?:boolean, 
    email?:string,
    err?:string
}

export interface changePasswordResponseInterface{
    isPasswordChanged?:boolean,
    err?:string
}