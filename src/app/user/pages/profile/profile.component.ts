import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../service/profile/profile.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private subscription!: Subscription;


  constructor(private profileService:ProfileService){}
  

  ngOnInit(): void {

  
    
  }

  editProfile(){

    
       
    }
    
    uploadImage(){
  
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      
      input.addEventListener('change', async () => {
        const files = input.files;
        if (files && files.length > 0) {
          const newImage = files[0];
          console.log('image', newImage);
    
        }
      }); 
      input.click();
    }
  

}
