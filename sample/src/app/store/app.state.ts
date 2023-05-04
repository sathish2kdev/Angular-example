import { userInterFace } from "../CRUD/state/user.state";
import {userReducer} from "../CRUD/state/user.reducer"



export interface appState{
    user:userInterFace
}

export const appReducer = {
    users:userReducer
}