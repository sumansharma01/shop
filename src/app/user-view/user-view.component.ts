import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';



@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  users:Array<any>=[];
  constructor(private userServiceService:UserServiceService) { }

  ngOnInit(): void {
    this.userServiceService.getAllUsers().subscribe(data=>this.users=data);
  }
  userDelete(id:any){
    this.userServiceService.deleteUsersById(id);
  }
  
}
