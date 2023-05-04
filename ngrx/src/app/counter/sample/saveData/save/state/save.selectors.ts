import { createFeatureSelector, createSelector } from "@ngrx/store";
import { commonSave } from "./save.state";

const selectors = createFeatureSelector<commonSave>("crudReducer");


export const showData = createSelector(selectors,(state) =>  {return state.customerDetails})

