import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  constructor(private fb:FormBuilder,private userServiceService:UserServiceService,private router:Router) { }
  newUserCreationForm=this.fb.group(
    {
      username:[''],
      email:[''],
      mobile:[''],
      password:[''],
      confirmPassword:[''],
      country:[''],
      state:[''],
      city:[''],
      gender:[''],
      zipCode:[]
    }
  );
  ngOnInit(): void {
  }

  addUser(){
    this.userServiceService.addUser(this.newUserCreationForm.value);
    this.router.navigate(['/user-view']);
  }

}
