import { Component,OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy  {

  private modelSubscription!: Subscription;
  isModelOpen: boolean = false;

  constructor() {  }
ngOnInit(): void {

  
}
  ngOnDestroy() {
  }


}
