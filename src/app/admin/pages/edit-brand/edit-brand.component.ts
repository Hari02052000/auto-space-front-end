import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-brand',
  templateUrl: './edit-brand.component.html',
  styleUrls: ['./edit-brand.component.css']
})
export class EditBrandComponent {

  //editBrandForm:FormGroup

  // constructor(public dialogRef: MatDialogRef<EditBrandComponent>,private formBuilder: FormBuilder,private store:Store) {
  //   this.editBrandForm = this.formBuilder.group({
  //     brandName:['',Validators.required]
  //   })
  // }

  

  onSubmit() {
   // if (this.editBrandForm.valid) {

      //this.store.dispatch(adminBrandAddingActions.brandFormSubmit(this.brandForm.value))
   // }
  }


}
