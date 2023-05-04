import { createAction, props } from '@ngrx/store';
import { pipe } from 'rxjs';

export const saveUserData = createAction('save', pipe<{ user: any }>());

export const getData = createAction('getUserData');