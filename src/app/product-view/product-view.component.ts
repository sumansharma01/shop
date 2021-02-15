import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../product-service.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  products:any=[];
  constructor(private productDataService:ProductServiceService) { }

  ngOnInit(): void {
    this.products=this.productDataService.getAllProducts();
    console.log(this.products);
  }

  deleteProduct(id:any){
    this.productDataService.deleteProductsById(id);
  }

}
