import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Socket, io } from 'socket.io-client';
import { FetchProductServiceService } from 'src/app/service/fetch-product-service.service';
import { SingleMessageInterface, userInterface } from 'src/app/models/fetch.message';
import { userData } from 'src/app/models/user.interfaces';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoged: boolean = false
  newmsgs: number = 0 // count of unread messages
  user!:userInterface
  private socket!: Socket;
  isDropdownOpen = false;



  constructor(private router: Router, protected authservice: FetchProductServiceService) {

  }

  @HostListener('window:userTokenChange', ['$event'])
  onStorageChange(event: Event) {
    console.log('event change')
    const userToken = localStorage.getItem('userToken');
    if (userToken) {
      this.connectSocket(userToken);

    }

  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  


  ngOnInit(): void {

    const initialToken = localStorage.getItem('userToken');
    if (initialToken) {
      this.connectSocket(initialToken);

    }
  }

  private connectSocket(token: string): void {
    this.socket = io('http://localhost:3000/user-alert', {
      transports: ['websocket', 'polling'],
      auth: {
        token: token
      }
    });

    this.socket.connect();
    this.socket.on('connected', (data:userData) => {
      this.isLoged = data.loged
      this.newmsgs = data.unreadMessages
      this.user = data.user

    })

    this.socket.on('newMessage', (newMessage: SingleMessageInterface) => {
      this.newmsgs++
      alert(newMessage.text);
    });

    this.socket.on('noUser', () => {

      localStorage.removeItem('userToken')
      this.isLoged = false


    })
  }




  makeZero() {
    this.newmsgs = 0
  }


  logout() {
    localStorage.removeItem('userToken')
    this.isLoged = false
    window.location.reload()

  }




}
