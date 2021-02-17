import { Component, OnInit } from '@angular/core';
import { IProducts } from '../product';
import {ProductServiceService} from '../product-service.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  products:IProducts[]=[];
  constructor(private productDataService:ProductServiceService) { }

  ngOnInit(): void {
    this.productDataService.getAllProducts().subscribe(data=>{
      this.products=data;
    })
  }

  deleteProduct(id:any){
    this.productDataService.deleteProductsById(id);
  }

}
