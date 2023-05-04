import { createReducer, on } from "@ngrx/store";
import { add, Empty, sub } from "./sample.action";
import { sampleData } from "./sample.state";



const _reducerFunction = createReducer(
    sampleData,
    on(add,
        (state) =>(
            {...state,value:state.value + 1}
        )
    ),
    on(sub,
        (state) =>(
            {...state,value:state.value -1}
        )
    ),
    on(Empty,
        (state) =>(
            {...state,value:0}
        )
    ) 
)

export function reducerFunctions(state: any,reducer: any){
    return _reducerFunction(state,reducer);
}