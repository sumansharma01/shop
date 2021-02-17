import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productLength:number=0;
  get name(){
    return this.newProductCreationForm.get('name');
  }
  get price(){
    return this.newProductCreationForm.get('price');
  }
  get description(){
    return this.newProductCreationForm.get('description');
  }

  // newProductCreationForm=new FormGroup(
  //   {
  //     name:new FormControl(''),
  //     price:new FormControl(),
  //     description:new FormControl('')

  //   }
  // );
  constructor(private productServiceService:ProductServiceService,private router:Router,private fb:FormBuilder) { }

  newProductCreationForm=this.fb.group(
    {
      name:['',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]],
      price:[,[Validators.required]],
      description:['',[Validators.required,Validators.minLength(20)]]
    }
  );

  ngOnInit(): void {
    this.productServiceService.getAllProducts().subscribe(data=>this.productLength=data.length);
  }

  productSubmitForm(){
    console.log(this.newProductCreationForm.value,this.productLength);
    this.productServiceService.addProduct(this.newProductCreationForm.value,this.productLength+1);
    this.router.navigate(['/product-view']);
  }

}
