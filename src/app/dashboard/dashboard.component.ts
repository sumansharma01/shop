import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  productLength:number=0;
  userLength:number=0;
  constructor(private userServiceService:UserServiceService,private productServiceService:ProductServiceService) { }

  ngOnInit(): void {
    this.productServiceService.getAllProducts().subscribe(data=>this.productLength=data.length);
    this.userServiceService.getAllUsers().subscribe(data=>this.userLength=data.length);
  }

}
