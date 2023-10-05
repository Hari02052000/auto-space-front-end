import { Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';
import { newinteface } from 'src/app/models/fetch.chat.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit, OnDestroy {

  chats: newinteface[] = []
  isActive: boolean = false;
  subscription!: Subscription


  constructor(private chatservice: AuthService) {


  }

  ngOnInit(): void {


    this.subscription = this.chatservice.getAllChats().subscribe(
      res => {
        this.chats = res.chats
      },
      err => {
      }
    )
  }
  setcount(productid: string, senderid: string) {
    const chatToUpdate = this.chats.find((chat) => {
      return chat._id.productId === productid && chat._id.senderId === senderid;
    });

    if (chatToUpdate)
      chatToUpdate.unreadCount = 0

  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }


}
