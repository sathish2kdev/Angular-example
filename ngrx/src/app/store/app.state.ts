import { reducerFunction } from "../counter/state/conter.reducer";
import { count } from "../counter/state/counter.state";
import { postReducer } from "../post/state/post.reducer";
import { postinterface } from "../post/state/post.state";

export interface appState{
    count:count
    posts:postinterface
}

export const appReducer ={
    counter:reducerFunction,
    post:postReducer
}