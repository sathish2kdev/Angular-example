import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { mainState } from 'src/app/store/samples.state';
import { customerDetails } from './state/model/save';
import { getData, saveCustomerDetails, saveData } from './state/save.action';
import { showData } from './state/save.selectors';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {
  showData$: Observable<any> | undefined;

  constructor(private fb:FormBuilder,private store:Store) { }

  cutomerSaveForm =  this.fb.group({
    customerName:"",
    customerLocation:'',
    customerSalary:'',
    customerNumber:''
  })
  ngOnInit(): void {
    console.log("saveComponent");
    this.showData$ = this.store.select(showData);
    this.store.dispatch(getData());
  }

  SaveCustomerDetails(){

    const data:customerDetails={
    customerName:this.cutomerSaveForm.value.customerName,
    customerLocation:'',
    customerSalary:'',
    customerNumber:''
    }
    console.log(data);
    
    this.store.dispatch(saveCustomerDetails({customerDetails:this.cutomerSaveForm.value}))

  }
}
