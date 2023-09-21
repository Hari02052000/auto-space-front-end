import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { AddCarComponent } from './add-car/add-car.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatComponent } from './chat/chat.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { LoginComponent } from '../login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DataTablesModule } from 'angular-datatables';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EditProductComponent } from './edit-product/edit-product.component';
import { FetchProductServiceService } from 'src/app/service/fetch-product-service.service';
import { InterceptorService } from '../service/interceptor/interceptor.service';
import { AuthService } from '../service/auth/auth.service';
import { RegisterComponent } from './register/register.component';
import { ProductService } from '../service/product/product.service';
import { MatIconModule } from '@angular/material/icon';
import { PlansListComponent } from './plans-list/plans-list.component';
import { OtpComponent } from './otp/otp.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


const routes:Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'cars',
    component:CarsComponent

  },
  {
    path:'add-car',
    component:AddCarComponent
  },
  {
    path:'single-product/:id',
    component:SingleProductComponent
  },
  {
    path:'chat-list',
    component:ChatListComponent,
    children:[
      {
        path:'chat/:recevierid/:productid',
        component:ChatComponent
      }

  ]
  },


  {
    path:'chat-owner/:recevierid/:productid',
    component:ChatComponent
  },

  
  
  {
    path:'single-product',
    component:SingleProductComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
   path:'register',
   component:RegisterComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'product-list/:id',
    component:ProductListComponent
  },
  {
    path:'edit-product',
    component:EditProductComponent
  },
  {
    path:'plans-list',
    component:PlansListComponent
  },
  {
    path:'otp/:email/:isPasswordChange',
    component:OtpComponent
  },
  {
    path:'forgot-password',
    component:ForgotPasswordComponent
  },
  {
    path:'change-password/:email',
    component:ChangePasswordComponent
  }




]

@NgModule({
  declarations: [
    
    HomeComponent,
    CarsComponent,
    AddCarComponent,
    ChatComponent,
    ChatListComponent,
    SingleProductComponent,
    LoginComponent,
    ProfileComponent,
    ProductListComponent,
    EditProductComponent,
    RegisterComponent,
    PlansListComponent,
    OtpComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,

    HttpClientModule,
    MatIconModule,
    RouterModule.forChild(routes),
  ],
  providers:[
    FetchProductServiceService,
    AuthService,
    ProductService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:InterceptorService,
      multi:true
    },

  ]
})
export class PagesModule { }
