import { Component, OnInit } from '@angular/core';
import {Validators, FormControl,FormBuilder,FormGroup} from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit {
  productLength: number = 0;
  currentId:number=0;
  newProductCreationForm:any={}
  
  

  // newProductCreationForm=new FormGroup(
  //   {
  //     name:new FormControl(''),
  //     price:new FormControl(),
  //     description:new FormControl('')

  //   }
  // );
  
  constructor(
    private productServiceService: ProductServiceService,
    private router: Router,
    private fb: FormBuilder,
    private activatedRoute:ActivatedRoute
  ) {

    this.currentId=this.activatedRoute.snapshot.params.id;
    this.productServiceService.getProductById(this.currentId).subscribe((currentProduct:any)=>{
      this.newProductCreationForm = this.fb.group({
        name: this.fb.control(currentProduct.name
          ,
          [Validators.required, Validators.minLength(5), Validators.maxLength(20)],
        ),
        price:this.fb.control( currentProduct.price, [Validators.required]),
        description: this.fb.control(currentProduct.description, [Validators.required, Validators.minLength(20)]),
      });
    });
  }

  

  ngOnInit(): void {
    

    

      
  }

  productEditForm() {
    this.productServiceService.editProduct(this.newProductCreationForm.value,this.currentId);
    this.router.navigate(['/product-view']);
  }
}
