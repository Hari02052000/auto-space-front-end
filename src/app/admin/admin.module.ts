import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { MatComponentsModule } from '../mat-components/mat-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



const routes: Routes = [
  
  {
    path:'admin',
    component:AdminComponent,
    children:[
      {
        
        path:'',
        loadChildren:()=>import('./pages/pages.module').then(m=>m.PagesModule)
      }
    ]
  },
  {
    path:'admin/login',
    component:LoginComponent
  }
]



@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatComponentsModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
