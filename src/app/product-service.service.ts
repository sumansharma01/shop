import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  productData=[
    {
      id: 1,
      imgsrc:'https://via.placeholder.com/150',
      name:'item one',
      price:'30',
      description:'Description of the product one.'
    },
    {
      id: 2,
      imgsrc:'https://via.placeholder.com/150',
      name:'item two',
      price:'25.99',
      description:'Description of the product two.'
    },
    {
      id: 3,
      imgsrc:'https://via.placeholder.com/150',
      name:'item three',
      price:'34.90',
      description:'Description of the product three.'
    },
    {
      id: 4,
      imgsrc:'https://via.placeholder.com/150',
      name:'item four',
      price:'26.99',
      description:'Description of the product four.'
    },
    {
      id: 5,
      imgsrc:'https://via.placeholder.com/150',
      name:'item five',
      price:'24.99',
      description:'Description of the product five.'
    },
    {
      id: 6,
      imgsrc:'https://via.placeholder.com/150',
      name:'item six',
      price:'24.99',
      description:'Description of the product five.'
    }
  ]
  constructor() { }
  getAllProducts():Array<object>{
    return this.productData;
  }
  getLength(){
    return this.productData.length;
  }

}
