import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, concatMap } from 'rxjs';
import { Socket, io } from 'socket.io-client';
import { AuthService } from '../../service/auth/auth.service';
import { SingleMessageInterface, userInterface } from 'src/app/models/fetch.message';
import { productInterface } from 'src/app/models/fetch.products.interface';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent {

  private socket!: Socket;
  response!: Observable<any>;
  messages: SingleMessageInterface[] = [];
  newMessage: string = '';
  logedUser!: string;
  recever!: userInterface;
  routeSubscription!: Subscription;
  msgSubscription!: Subscription;
  product!: productInterface;

  @ViewChild('scrollContainer')
  scrollContainer!: ElementRef;


  constructor(private route: ActivatedRoute,
    private userservice: AuthService
  ) { }
  ngOnInit(): void {

    this.routeSubscription = this.route.params.pipe(
      concatMap(params => {
        const recevierid: string = params['recevierid'];
        const productid = params['productid'];
        console.log(recevierid, productid);
        this.handleRouteChange()
        return this.userservice.getMessage(recevierid, productid)
      })
    )
      .subscribe(
        response => {
          this.messages = response.messages
          this.logedUser = response.logedUser,
            this.recever = response.recever,
            this.product = response.product
        },
        error => {

        }
      );



    this.socket = io(`${environment.baseUrl}/user-chat`, {

      transports: ['websocket', 'polling'],

      auth: {
        token: localStorage.getItem('userToken')
      }

    })


    this.socket.on('chat-saved', (newChat: SingleMessageInterface) => {

      console.log('new chat create', this.socket.id, newChat)
      this.messages.push(newChat)

      this.newMessage = ''
      this.scrollToBottom()
    })

    this.socket.on('error', (error) => {
      alert(error);
    });





  }


  scrollToBottom(): void {
    try {
      const container = this.scrollContainer.nativeElement;
      container.scrollTop = container.scrollHeight;

    } 

    catch(err) { 
      alert(err)
    }
  }




  sendMessage() {

    const recevierid = this.route.snapshot.params['recevierid'];
    const productid = this.route.snapshot.params['productid'];
    const message = {
      productid: productid,
      recevierid: recevierid,
      text: this.newMessage,
    };
    
    this.socket.emit('sendMessage', message);


  }

  handleRouteChange(): void {
    this.newMessage = '';
    if (this.msgSubscription) {
      this.msgSubscription.unsubscribe()
    }
  }

  ngOnDestroy(): void {
    if (this.msgSubscription) {
      this.msgSubscription.unsubscribe()
    }
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe()
    }
    this.socket.disconnect()

  }


}
