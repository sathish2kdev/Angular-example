import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Data } from "./sample.state";

const getstate = createFeatureSelector<Data>('mainReducer');

export const getvalue = createSelector(getstate,(state) => {return state.value});


// const getstate =  createFeatureSelector<count>('counter');

// export const getCount = createSelector(getstate,(state) =>{ return state.counter });
