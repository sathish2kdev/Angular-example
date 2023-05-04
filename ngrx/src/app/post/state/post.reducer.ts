import { createReducer, on } from "@ngrx/store";
import { savepostData, showpostdata } from "./post.actions";
import { postvalue } from "./post.state";


const _postReducer = createReducer(
    postvalue,on(showpostdata,
        state =>{
            return { ...state,post: state.post}
        }),
        on(savepostData,
            (state,action)=>{
                console.log(action);
                
                let post = {...action.post};
                console.log(post);
                
                console.log(state.post.length);
                
                post.id = (state.post.length + 1);
                return {...state,post:[...state.post,post]}
            })
)

export function postReducer(state:any,action:any){
    return _postReducer(state,action);
} 