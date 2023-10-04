import { Component,ElementRef,Renderer2 } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';
import { newinteface } from 'src/app/models/fetch.chat.interface';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent {

  chats:newinteface[] = []
  isActive: boolean = false;


  constructor(private chatservice:AuthService,private el: ElementRef, private renderer: Renderer2){

    
  }

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
 setcount(productid:string,senderid:string){
  console.log('product')
  console.log(this.chats)
  console.log(productid,senderid)
  const chatToUpdate = this.chats.find((chat) => {
    return chat._id.productId === productid && chat._id.senderId === senderid;
  });
  
  console.log(chatToUpdate)
if(chatToUpdate)
  chatToUpdate.unreadCount = 0

 }

  

}
