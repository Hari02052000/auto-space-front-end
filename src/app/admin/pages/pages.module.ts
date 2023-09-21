import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListedVehiclesComponent } from './listed-vehicles/listed-vehicles.component';
import { UsersListComponent } from './users-list/users-list.component';
import { BrandsComponent } from './brands/brands.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddBrandComponent } from './add-brand/add-brand.component';
import { EditBrandComponent } from './edit-brand/edit-brand.component';
import { AddModelComponent } from './add-model/add-model.component';
import { EditModelComponent } from './edit-model/edit-model.component';
import { AddOptionComponent } from './add-option/add-option.component';
import { EditOptionComponent } from './edit-option/edit-option.component';
import { MatComponentsModule } from 'src/app/mat-components/mat-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlansComponent } from './plans/plans.component';
import { AddPlanComponent } from './plans/add-plan/add-plan.component';
import { EditPlanComponent } from './plans/edit-plan/edit-plan.component';

const routes:Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'brands',
    component:BrandsComponent
  },
  {
    path:'user-list',
    component:UsersListComponent
  },
  {
    path:'vehicle-list',
    component:ListedVehiclesComponent
  },
  {
    path:'plan-list',
    component:PlansComponent
  }
]

@NgModule({
  declarations: [
    ListedVehiclesComponent,
    UsersListComponent,
    BrandsComponent,
    HomeComponent,
    AddBrandComponent,
    EditBrandComponent,
    AddModelComponent,
    EditModelComponent,
    AddOptionComponent,
    EditOptionComponent,
    PlansComponent,
    AddPlanComponent,
    EditPlanComponent,
  ],
  imports: [
    CommonModule,
    MatComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesModule { }
