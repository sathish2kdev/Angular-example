import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appState } from 'src/app/store/app.state';
import { getCount } from '../state/counter.selectors';
import { count } from '../state/counter.state';
@Component({
  selector: 'app-componentoutput',
  templateUrl: './componentoutput.component.html',
  styleUrls: ['./componentoutput.component.css']
})
export class ComponentoutputComponent implements OnInit {

 counter$:Observable<any> | undefined;

  counter:any

  
  constructor(private store:Store<appState>) { 
   
  }

  ngOnInit(): void {
    console.log("Counter-Output");
    
    this.counter$ = this.store.select(getCount);
  }

}
