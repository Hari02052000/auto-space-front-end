import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule  } from '@angular/material/sidenav'
import { MatListModule  } from '@angular/material/list'
import { MatIconModule  } from '@angular/material/icon'
import {MatToolbarModule  } from '@angular/material/toolbar'
import {MatCardModule  } from '@angular/material/card'
import{ MatButtonModule } from '@angular/material/button'
import{  MatExpansionModule } from '@angular/material/expansion'
import{  MatFormFieldModule } from '@angular/material/form-field'
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';








@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSnackBarModule,
    MatInputModule
    


  ],
  exports:[

    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatDialogModule,
    MatSnackBarModule,
    MatInputModule


  ]
})
export class MatComponentsModule { }
