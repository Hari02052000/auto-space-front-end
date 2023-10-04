import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../service/profile/profile.service';
import { Subscription } from 'rxjs';
import { userInterface } from 'src/app/models/fetch.message';
import { TosterService } from 'src/app/service/toster/toster.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
//user blocked   //user not verified
  private subscription!: Subscription;
  user!: userInterface;
  username:string=''
  email:string=''


  constructor(private profileService:ProfileService,private toster:TosterService,private router:Router){}
  
  ngOnInit(): void {

    this.subscription = this.profileService.getUserDetails().subscribe((res)=>{
          
     if(res.user){
       this.user = res.user
       this.username = res.user.username
       this.email = res.user.email
     }
     
     })
     
     
   }
   ngOnDestroy(): void {
 
     if(this.subscription){
 
       this.subscription.unsubscribe()
     }
    }
 

  editProfile(){

    console.log(this.username,this.email)

    this.profileService.editProfile(this.username,this.email).subscribe((res)=>{


      if(res.usernamechange){

        this.toster.showCustomToast('success','username updated')
        this.user.username = this.username
      }

      if(res.err){
        this.toster.showCustomToast('error',res.err)
        this.username = this.user.username
        this.email = this.user.email
      }

      if(res.emailchange){
        this.toster.showCustomToast('success','email updated plese enter the otp')
        this.user.email = this.email
        this.router.navigate(['/otp',this.email,false])
      }
    })
       
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

          const profileForm = new FormData();
          profileForm.append('images',newImage );
          this.profileService.uploadProfile(profileForm).subscribe((res)=>{

            if(res.profile && res.profileUpdated){

              this.user.profile = res.profile
              this.toster.showCustomToast('success','profile updated')
            }
            else if(res.err){
              this.toster.showCustomToast('error','profile not updated')

            }
          })
   
    
        }
      }); 
      input.click();



    }
  

}
