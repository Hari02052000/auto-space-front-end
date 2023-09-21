import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'auto-space';
  
  ngOnInit(): void {
    initFlowbite();
  }

}
