import { Component } from '@angular/core';

@Component({
  selector: 'app-add-option',
  templateUrl: './add-option.component.html',
  styleUrls: ['./add-option.component.css']
})
export class AddOptionComponent {

  // optionForm:FormGroup

  // addOptionErr$!: Observable<string|undefined>;


  // constructor(public dialogRef: MatDialogRef<AddOptionComponent>,private formBuilder: FormBuilder,private store:Store,     @Inject(MAT_DIALOG_DATA) private data:data
  // ) {
  //   this.optionForm = this.formBuilder.group({
  //     optionName:['',Validators.required]
  //   })
  // }

  // ngOnInit(): void {
  //   this.addOptionErr$ = this.store.pipe(select(addOptionErrorSelector))

  // }

  // onSubmit() {
  //   if (this.optionForm.valid) {
  //        console.log(this.data)
  //    this.store.dispatch(adminOptionAddingActions.OptionFormSubmit({optionName:this.optionForm.value.optionName,brandId:this.data.brandId,modelId:this.data.modelId}))
  //   }
  // }


}
