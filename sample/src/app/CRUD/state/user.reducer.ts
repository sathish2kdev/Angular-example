
import { createReducer, on } from "@ngrx/store";
import { getData, saveUserData } from "./user.action";
import { userImplememtation } from "./user.state";

const _userReducer = createReducer(
    userImplememtation,
    on(saveUserData,(state,action)=>{
        let user = {...action.user};
        console.log(user);
        
        return { ...state,UserDataManual:[...state.UserDataManual,user]}
    }),
    // on(getData,(state)=>{
    //     console.log(state.user);
 
    //     return{ ...state,user:state.user}
    // }
    //     )
)


export function userReducer(state:any,reducer:any){
    return _userReducer(state,reducer);
}