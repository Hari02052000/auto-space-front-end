import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-model',
  templateUrl: './edit-model.component.html',
  styleUrls: ['./edit-model.component.css']
})
export class EditModelComponent {

  editModelForm:FormGroup

  constructor(public dialogRef: MatDialogRef<EditModelComponent>,private formBuilder: FormBuilder) {
    this.editModelForm = this.formBuilder.group({
      modeldName:['',Validators.required]
    })
  }

  

   onSubmit() {
  //   if (this.editModelForm.valid) {

     // this.store.dispatch(adminBrandAddingActions.brandFormSubmit(this.brandForm.value))
  //  }
  }



}
