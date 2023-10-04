import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { FooterComponent } from './footer/footer.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './service/interceptor/interceptor.service';
import { LoadingComponent } from '../loading/loading.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'',
    component:UserComponent,
    children:[
      {
        
        path:'',
        loadChildren:()=>import('./pages/pages.module').then(m=>m.PagesModule)
      }
    ]



      
      
      
    
    
    }
  

];


@NgModule({
  declarations: [
    UserComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ],
  providers:[
    {
      provide:HTTP_INTERCEPTORS,
      useClass:InterceptorService,
      multi:true
    },

  ]
})
export class UserModule { }
