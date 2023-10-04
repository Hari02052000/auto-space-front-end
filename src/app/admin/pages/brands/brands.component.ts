import { Component } from '@angular/core';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subject, map } from 'rxjs';
import { AddBrandComponent } from '../add-brand/add-brand.component';
import { AddModelComponent } from '../add-model/add-model.component';
import { EditModelComponent } from '../edit-model/edit-model.component';
import { EditBrandComponent } from '../edit-brand/edit-brand.component';
import { AddOptionComponent } from '../add-option/add-option.component';
import { EditOptionComponent } from '../edit-option/edit-option.component';
import { BrandService } from '../../service/brand/brand.service';
import { addBrandSuccessInterface } from '../../interfaces/admin.product.interface';


@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent {
   
  constructor(private dialog:MatDialog,private snackbar:MatSnackBar,private brandService:BrandService){


  }
   
    brands: addBrandSuccessInterface[]|undefined;
   addBrandDialogRef!: MatDialogRef<AddBrandComponent>;
   addModelDialogRef!: MatDialogRef<AddModelComponent>;
   editModelDialogRef!: MatDialogRef<EditModelComponent>;
   editBrandDialogRef!: MatDialogRef<EditBrandComponent>;
   addOptionDialogRef!: MatDialogRef<AddOptionComponent>;
   editOptionDialogRef!: MatDialogRef<EditOptionComponent>;
  
  
  
  
   
   private ngUnsubscribe = new Subject<void>(); 
  
  
  ngOnInit(): void {
    
    this.brandService.getbrands().subscribe((res)=>{
    if(res.brands){
      this.brands = res.brands
    }
  })
     //this.brands$ = this.store.pipe(select(allBrandSelector))
  
    //   this.store.pipe(select(addBrandSelector),takeUntil(this.ngUnsubscribe)).subscribe((added)=>{
    //   if(added){
    //     this.openSnackBar('brand added successfully','close')
    //     this.addBrandDialogRef?.close()
    //     this.store.dispatch(adminBrandAddingActions.ResetSucceess())
    //   }
    // })
      
    // this.store.pipe(select(addOptionSelector),takeUntil(this.ngUnsubscribe)).subscribe((added)=>{
    //   if(added){
    //     this.openSnackBar('option added successfully','close')
    //     this.addOptionDialogRef?.close()
    //     this.store.dispatch(adminOptionAddingActions.ResetSucceess())
    //   }
    // })
  
    // this.store.pipe(select(addModelSelector),takeUntil(this.ngUnsubscribe)).subscribe((added)=>{
    //   if(added){
    //     this.openSnackBar('model added successfully','close')
    //     this.addModelDialogRef?.close()
    //     this.store.dispatch(adminModelAddingActions.ResetSucceess())
    //   }
    // })
  
  
    
  }
  ngOnDestroy(): void {
  
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  
    
  }
   
  
  
  openSnackBar(message: string, action: string) {
    this.snackbar.open(message, action, {
      duration: 3000, 
      verticalPosition:"bottom"
    });
  }
  
  
  
  findModels(id:string){
  }
  
    openAddBrandDialog(){
  
      this.addBrandDialogRef = this.dialog.open(AddBrandComponent);

    
      this.addBrandDialogRef.afterClosed().subscribe((res)=>{

        if(res.brand){
        this.brands?.push(res.brand)
        }
      })
  
    }
    
    openAddModelDialog(id:string){
         
      this.addModelDialogRef = this.dialog.open(AddModelComponent,{data:{id:id}})

      this.addModelDialogRef.afterClosed().subscribe((res)=>{
        if(res.model){
           
          console.log(res.model)
         const updatedbrands = this.brands?.find((brand)=>{
          return brand._id === id
         })

         updatedbrands?.models.push(res.model)
        
        }
      })


      
  
    }
  
    openAddOptionDialog(modelId:string,brandId:string){
      this.addOptionDialogRef = this.dialog.open(AddOptionComponent,{data:{modelId:modelId,brandId:brandId}})

      this.addOptionDialogRef.afterClosed().subscribe((res)=>{
        if(res.option){
          const brandToUpdate = this.brands?.find(brand => brand._id === brandId);
          const ModelToUpdate = brandToUpdate?.models.find(model=>model._id === modelId)
          ModelToUpdate?.options.push(res.option)

        }
      })
    }
  
    editOptionDialog(brandid:string,modelid:string,optionid:string,optionName:string){
      this.editOptionDialogRef = this.dialog.open(EditOptionComponent,{data:{optionName:optionName,optionId:optionid}})

      this.editOptionDialogRef.afterClosed().subscribe((res)=>{
        if(res.optionname){
          const brandToUpdate = this.brands?.find(brand => brand._id === brandid);

          if(brandToUpdate){
            const model = brandToUpdate.models.find(model=>model._id === modelid)
            if(model){
              const option = model.options.find(option=>option._id === optionid)
              if(option){
                option.name = res.optionname
              }
            }
          }

        }
      })
    }
    editBrandDialog(brandname:string,id:string){
      this.editBrandDialogRef = this.dialog.open(EditBrandComponent,{data:{brandId:id,brandName:brandname}})

      this.editBrandDialogRef.afterClosed().subscribe((res)=>{
        if(res.brandname){

          const brandToUpdate = this.brands?.find(brand => brand._id === id);
          if(brandToUpdate)
          brandToUpdate.name = res.brandname
  

        }

      })
    }
    editModelDialog(brandid:string,modelname:string,modelid:string){
      this.editModelDialogRef = this.dialog.open(EditModelComponent,{data:{
        modelName:modelname,modelId:modelid
      }})
      this.editModelDialogRef.afterClosed().subscribe((res)=>{
        if(res.modelname){
          
          const brandToUpdate = this.brands?.find(brand => brand._id === brandid);

          if(brandToUpdate){
            const model = brandToUpdate.models.find(model=>model._id === modelid)
            if(model)
            model.name = res.modelname
          }


        }
      })
    }
  
}
