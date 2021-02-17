import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  currentId:number=0;
  newUserCreationForm:any={};
  constructor(private fb:FormBuilder,private userServiceService:UserServiceService,private router:Router,private activatedRoute:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.currentId=this.activatedRoute.snapshot.params.id;
    
    this.userServiceService.getUserById(this.currentId).subscribe((currentUser:any)=>{
      this.newUserCreationForm=this.fb.group(
        {
          username:[currentUser.username,[]],
          email:[currentUser.email,[]],
          mobile:[currentUser.mobile,[]],
          password:[currentUser.password,[]],
          confirmPassword:[currentUser.confirmPassword,[]],
          country:[currentUser.country,[]],
          state:[currentUser.state,[]],
          city:[currentUser.city,[]],
          gender:[currentUser.gender,[]],
          zipCode:[currentUser.zipCode,[]]
        });
    });
    
    
  }

  editUser(){
    this.userServiceService.editUser(this.newUserCreationForm.value,this.currentId);
    this.router.navigate(['/user-view']);
  }


}
