import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { mainState } from 'src/app/store/samples.state';
import { add, Empty, sub } from '../state/sample.action';
import { getvalue } from '../state/sample.selectors';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {


  sample$!: Observable<any>;
  constructor(private store:Store<mainState>) { }

  ngOnInit(): void {
    
   this.sample$ = this.store.select(getvalue);

   console.log("sampleComponent");  
   console.log(this.sample$);
   
  }

  Add(){
    this.store.dispatch(add());
  }
  Sub(){
    this.store.dispatch(sub());
  }
  Empty(){
    this.store.dispatch(Empty());
  }

}
