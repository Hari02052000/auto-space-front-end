import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-add-model',
  templateUrl: './add-model.component.html',
  styleUrls: ['./add-model.component.css']
})
export class AddModelComponent implements OnInit {

  //modelForm:FormGroup
      
 // addModelErr$!: Observable<string|undefined>;
 

  // constructor(public dialogRef: MatDialogRef<AddModelComponent>,private formBuilder: FormBuilder,private store:Store,
  //    @Inject(MAT_DIALOG_DATA) private data:brandId
  //   ) {
      
    
  //   this.modelForm = this.formBuilder.group({
  //     modelName:['',Validators.required]
  //   })
  // }

   ngOnInit(): void {
   // this.addModelErr$ = this.store.pipe(select(addModelErrorSelector))

   }
  

  onSubmit() {
    // if (this.modelForm.valid) {
    //   console.log(this.modelForm.value.modelName)
    //   this.store.dispatch(adminModelAddingActions.ModelFormSubmit({modelname:this.modelForm.value.modelName,brandId:this.data.id}))
    // }
  }


}
