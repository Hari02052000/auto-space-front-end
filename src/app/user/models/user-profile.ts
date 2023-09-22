import { userInterface } from "src/app/models/fetch.message";
import { userprofile } from "src/app/models/user.interfaces";

export interface fetchUserResponseInterface{

    user?:userInterface,
    err?:string
   
   }

   export interface userProfileUpdateResponseInterface{
      
    profileUpdated?:boolean,
    profile?:userprofile,
    err?:string
     
   }

   export interface editDetailsResponseInterface{
     usernamechange?:boolean,
     emailchange?:boolean,
     err?:string
   }
   