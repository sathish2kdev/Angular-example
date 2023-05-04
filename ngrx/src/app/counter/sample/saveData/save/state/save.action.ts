import { createAction } from "@ngrx/store";
import { pipe } from "rxjs";


export const saveCustomerDetails = createAction("saveCustomerDetails",pipe<{customerDetails:any}>())

export const getData = createAction("GetDatas");

export const saveData = createAction("saveData",pipe<{data:any}>())