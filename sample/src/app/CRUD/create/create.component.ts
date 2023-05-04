import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { user } from '../module/user.module';
import { saveUserData } from '../state/user.action';
import { getSavedUserData } from '../state/user.selectors';
import { userInterFace } from '../state/user.state';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  userData$: Observable<any> | any;

  constructor(private fb:FormBuilder,private store:Store<{userreducer:userInterFace}>) { }

  user = this.fb.group({
    name:["",Validators.required],
    age:["",Validators.required],
    number:["",Validators.required],
    company:["",Validators.required],
    postion:["",Validators.required],
  });

  ngOnInit(): void {
    this.userData$ = this.store.select(getSavedUserData);
  }
  submit(){
    if(this.user.valid){
      const user:user ={
        name: this.user.value.name,
        age: this.user.value.age,
        number: this.user.value.number,
        company: this.user.value.company,
        position: this.user.value.position
      }
   
        this.store.dispatch(saveUserData({user:user}));
      
      console.log("savedsuccessfully");
   //  this.ro
    }
    //this.ngOnInit();
  }
}
