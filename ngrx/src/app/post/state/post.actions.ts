import { createAction } from "@ngrx/store";
import { pipe } from "rxjs";


export const showpostdata =  createAction('ShowPostData');

export const savepostData =  createAction('savePost',pipe<{post:any}>());
