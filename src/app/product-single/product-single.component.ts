import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-single',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.css']
})
export class ProductSingleComponent implements OnInit {
  @Input() productSingleData={}
  constructor() { }

  ngOnInit(): void {
  }

}
