import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { userInterFace } from "./user.state";

const getAllUserData = createFeatureSelector<userInterFace>('userreducer');

export const getSavedUserData =  createSelector(getAllUserData,(state) =>
 { return state.user} )


 export const getuserDatamanual =  createSelector(getAllUserData,(state)=>{return state.UserDataManual});