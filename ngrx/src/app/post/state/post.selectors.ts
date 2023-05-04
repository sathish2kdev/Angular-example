
import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { postinterface } from "./post.state";



const getPost =  createFeatureSelector<postinterface>('post');
 
export const getpostvalue = createSelector(getPost, (state) =>
{  return state.post} 
)