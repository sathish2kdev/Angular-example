import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/store/app.state';
import { decrement, increment, reset } from '../state/counter.action';
import { count } from '../state/counter.state';
@Component({
  selector: 'app-componentbutton',
  templateUrl: './componentbutton.component.html',
  styleUrls: ['./componentbutton.component.css']
})
export class ComponentbuttonComponent implements OnInit {

  
  constructor(private store:Store<appState>) { }

  ngOnInit(): void {
  }

  onincrement(){
    this.store.dispatch(increment());
  }
  ondecrement(){
    this.store.dispatch(decrement());
  }
  onreset(){
    this.store.dispatch(reset());
  }
}
