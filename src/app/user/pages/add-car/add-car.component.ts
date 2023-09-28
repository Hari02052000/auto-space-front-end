import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { BrandInterface, OptionInterface, modelInterface } from 'src/app/models/fetch.brand.interface';
import { FetchProductServiceService } from 'src/app/service/fetch-product-service.service';
import { ProductService } from '../../service/product/product.service';
import { TosterService } from 'src/app/service/toster/toster.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  brands: BrandInterface[] | undefined
  selectedBrand: BrandInterface | undefined;
  selectedOption: OptionInterface | undefined;
  selectedModel: modelInterface | undefined;
  selectedImages: File[] = []


  formStep1!: FormGroup;
  formStep2!: FormGroup;
  formStep3!: FormGroup;
  step: number = 1; // Current step
  stepIndicators: number[] = [1, 2, 3]; // Step indicators

  private ngUnsubscribe = new Subject<void>();




  constructor(private formBuilder: FormBuilder, private productService: FetchProductServiceService, private productAddService: ProductService, private tosterservice: TosterService, private router:Router
    ) { }

  ngOnInit(): void {
    //find user loged user,cheack the number of postes greater than 2 if greater than 2 add payment for that
    //
    this.productService.fetchBrand().pipe(takeUntil(this.ngUnsubscribe)).subscribe((res) => this.brands = res.brand)





    this.formStep1 = this.formBuilder.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      option: ['', Validators.required],
      year: ['', Validators.required]

    });

    this.formStep2 = this.formBuilder.group({
      fuel: ["", [Validators.required]],
      kmDriven: ["", [Validators.required]],
      price: ["", [Validators.required]],


    });

    this.formStep3 = this.formBuilder.group({
      location: ["", [Validators.required]],
      no_of_owners: ["", [Validators.required]],
      images: ['', Validators.required]


    });
  }


  nextStep(next: number): void {
    this.step = next;
  }

  prevStep(): void {
    if (this.step > 1) {
      this.step--;
    }
  }

  submitForm(): void {

    const productForm = new FormData();

    for (let i = 0; i < this.selectedImages.length; i++) {
      productForm.append('images', this.selectedImages[i]);
    }
    const formFields = { ...this.formStep1.value, ...this.formStep2.value, ...this.formStep3.value };
    delete formFields.images;
    const jsonData = JSON.stringify(formFields);
    productForm.append('formFields', jsonData);
    this.productAddService.addProduct(productForm).subscribe((res) => {
      if(res.productAdded){

        this.tosterservice.showCustomToast('success','your product is added')
        this.router.navigate([''])

      }
      else if(res.err === 'alowedCars is zero'){
        this.tosterservice.showCustomToast('error','sorry car is not added please subscribe a plan ')
        this.router.navigate(['/plans-list'])
      }
      else if(res.err) {
        this.tosterservice.showCustomToast('error',res.err)
      }
    },(err)=>{
      this.tosterservice.showCustomToast('error',err.error.message || 'error')
    })

  }
  isCurrentFormValid(): boolean {
    if (this.step === 1) {
      return this.formStep1.valid;
    } else if (this.step === 2) {
      return this.formStep2.valid;
    } else if (this.step === 3) {
      return this.formStep3.valid;
    }
    return false;
  }

  onBrandChange() {
    const brandId = this.formStep1.get('brand')?.value;

    this.selectedModel = undefined
    this.selectedBrand = this.brands?.find((brand) => brand._id == brandId)

  }

  onModelChange() {
    const modelId = this.formStep1.get('model')?.value;
    this.selectedModel = this.selectedBrand?.models.find((model) => model._id == modelId);

  }

  onFilesSelected(event: any): void {

    if (event.target.files && event.target.files.length > 0) {

      this.selectedImages = event.target.files

    }

  }




}
