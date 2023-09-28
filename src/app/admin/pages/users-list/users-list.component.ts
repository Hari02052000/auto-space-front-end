import { Component,OnInit } from '@angular/core';
import { UserService } from '../../service/user/user.service';
import { userInterface } from 'src/app/models/fetch.message';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users!:userInterface[]
  constructor( private userservice:UserService ){}

  ngOnInit(): void {

    this.userservice.getUsers().subscribe((res)=>{
      if(res.users){

        this.users = res.users
      }
    })
    
  }

  

}
