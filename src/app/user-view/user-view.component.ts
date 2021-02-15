import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';



@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  users:any=[];
  constructor(private userServiceService:UserServiceService) { }

  ngOnInit(): void {
    this.users=this.userServiceService.getAllUsers();
  }
  userDelete(id:any){
    this.userServiceService.deleteUsersById(id);
  }
  
}
