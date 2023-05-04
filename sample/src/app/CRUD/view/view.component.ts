import { Component, OnInit } from '@angular/core';
import { StateObservable, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appState } from 'src/app/store/app.state';
import { getData } from '../state/user.action';
import { getSavedUserData, getuserDatamanual } from '../state/user.selectors';
import { userInterFace } from '../state/user.state';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  UserData:any
  userData$:Observable<any> | undefined;
  userDataManual$:Observable<any> | undefined;
  constructor(private store:Store<{userreducer:userInterFace}>) { }

  ngOnInit(): void {
    this.userDataManual$ = this.store.select(getuserDatamanual);
    this.store.select(getuserDatamanual).subscribe(data=>{
      console.log(data);
      
    })
    this.userData$ = this.store.select(getSavedUserData);
  }
 
}
