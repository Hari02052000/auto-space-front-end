import { Component,OnInit } from '@angular/core';
import { UserService } from '../../service/user/user.service';
import { userInterface } from 'src/app/models/fetch.message';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConformationComponent } from './conformation/conformation.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users!:userInterface[]
  dialogRef!: MatDialogRef<ConformationComponent>;

  constructor( private userservice:UserService, private dialog:MatDialog ){}

  ngOnInit(): void {

    this.userservice.getUsers().subscribe((res)=>{
      if(res.users){

        this.users = res.users
      }
    })
    
  }

  blockUser(user:userInterface){

    const username = user.username
    const dialogRef = this.dialog.open(ConformationComponent, {
      data: { username: username,action:'block' }
    });

      dialogRef.afterClosed().subscribe((result) => {

        if(result){
         this.userservice.blockUser(user._id).subscribe((res)=>{
          if(res.blocked){
            const blockeduser = this.users.find((blocked)=>blocked._id === user._id )
            if(blockeduser){
              blockeduser.isBlocked = true
            }
          }
         })
        }
       
      })


  }

  
  unblockUser(user:userInterface){

    const username = user.username
    const dialogRef = this.dialog.open(ConformationComponent, {
      data: { username: username,action:'unblock' }
    });

      dialogRef.afterClosed().subscribe((result) => {

        if(result){
         this.userservice.UnblockUser(user._id).subscribe((res)=>{
          if(res.unBlocked){
            const unblockeduser = this.users.find((unblocked)=>unblocked._id === user._id )
            if(unblockeduser){
              unblockeduser.isBlocked = false
            }
          }
         })
        }
       
      })



  }
}
