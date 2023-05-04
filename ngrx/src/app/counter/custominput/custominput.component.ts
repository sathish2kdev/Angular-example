import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appState } from 'src/app/store/app.state';
import { addData, change } from '../state/counter.action';
import { getName } from '../state/counter.selectors';
import { count } from '../state/counter.state';

@Component({
  selector: 'app-custominput',
  templateUrl: './custominput.component.html',
  styleUrls: ['./custominput.component.css']
})
export class CustominputComponent implements OnInit {


  value:any;
  name:Observable<any> | undefined

  constructor(private store : Store<appState>) {
    
   }

  ngOnInit(): void {
    console.log("Custom-input");
    this.name =  this.store.select(getName);
  }
  addData(){
    this.store.dispatch(addData({value: +this.value}))

  }
  changeName(){
    this.store.dispatch(change())
  }
}
