import { Component } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';
import { newinteface } from 'src/app/models/fetch.chat.interface';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent {

  chats:newinteface[] = []

  constructor(private chatservice:AuthService){}

 ngOnInit(): void {
   this.chatservice.getAllChats().subscribe(
    res=>{
      this.chats = res.chats
      console.log(this.chats)
    },
    err=>{
      console.log(err)
    }
   )
 }


  

}
