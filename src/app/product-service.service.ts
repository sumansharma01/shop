import { HttpClient, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducts } from './product';


@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  
  productData = [
    
  ];
  constructor(private http:HttpClient) {}

  
  getAllProducts():Observable<IProducts[]>  {
    return this.http.get<IProducts[]>("http://localhost:3000/products");
  }
  
  addProduct(data:any,id:number){
    data.id=id;
    data.imgsrc="https://via.placeholder.com/111";
    this.http.post("http://localhost:3000/products",data).subscribe(data=>{});
  }
  getProductById(id:number):Observable<object>{
    return this.http.get(`http://localhost:3000/products/${id}`);
  }
  editProduct(dataObject:any,id:number){
    this.http.put(`http://localhost:3000/products/${id}`,dataObject).subscribe(r=>{});
  }
  

  deleteProductsById(id: any) {
    this.http.delete(`http://localhost:3000/products/${id}`).subscribe(data=>console.log(id+" deleted"));
  }
}

//observables are http responses sent asynchronously which need to be subscibed to access
