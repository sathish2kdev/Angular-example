import { createAction } from "@ngrx/store";
import { pipe } from "rxjs";

export const increment =  createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');

export const addData = createAction('AddData',pipe<{value : any}>());
export const change =  createAction('change'); 