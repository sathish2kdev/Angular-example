
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { count } from "./counter.state";


const getstate =  createFeatureSelector<count>('counter');

console.log(getstate);


export const getCount = createSelector(getstate,(state) =>{ return state.counter });

export const getName =  createSelector(getstate,state => { return state.name });