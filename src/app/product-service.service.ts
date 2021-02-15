import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  productData=[
    {
      id: 1,
      imgsrc:'https://via.placeholder.com/111',
      name:'item one',
      price:30,
      description:'Description of the product one.Description of the product one.Description of the product one.Description of the product one.Description of the product one.Description of the product one.Description of the product one.Description of the product one.Description of the product one.'
    },
    {
      id: 2,
      imgsrc:'https://via.placeholder.com/222',
      name:'item two',
      price:25.99,
      description:`1 kg x 2 PVC dumbbells
      A combination of gym equipment for the perfect workout
      Highly durable and long lasting
      A perfect muscle builder
      In-Box Contents: 1 kg x 2 PVC Dumbbells
      Country of Origin: India`
    },
    {
      id: 3,
      imgsrc:'https://via.placeholder.com/333',
      name:'item three',
      price:34.90,
      description:'Description of the product three.'
    },
    {
      id: 4,
      imgsrc:'https://via.placeholder.com/444',
      name:'item four',
      price:26.99,
      description:'Description of the product four.'
    },
    {
      id: 5,
      imgsrc:'https://via.placeholder.com/555',
      name:'item five',
      price:24.99,
      description:'Description of the product five.'
    },
    {
      id: 6,
      imgsrc:'https://via.placeholder.com/666',
      name:'item six',
      price:24.99,
      description:'Description of the product six.'
    }
  ]
  constructor() { }
  getAllProducts():Array<object>{
    return this.productData;
  }
  getLength(){
    return this.productData.length;
  }

  deleteProductsById(id:any){
    let i:number=-1;
    for(let index=0;index<this.getLength();index++){
      if(this.productData[index].id==id){
        i=index;
        break;
      }
    }

    if(i!=-1)
      this.productData.splice(i,1);
  }

}
