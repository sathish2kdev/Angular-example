
import { state } from "@angular/animations"
import { createReducer, on } from "@ngrx/store"
import { Action } from "rxjs/internal/scheduler/Action"
import { addData, change, decrement, increment, reset } from "./counter.action"
import { counterValue } from "./counter.state"




const _reducerFunction = createReducer(
  counterValue,
    on(increment,
      ((state)=>({...state,
        counter : +1 })
        
      
    )),
    on(decrement,
      state =>{
        return { ...state
          ,counter : state.counter-1
        }
      }
    ),
    on(reset,
      (state)=>{
        return { ...state,counter:0}
      }
      ),
      on(addData,
        (state,Action)=>{
          console.log(Action);
          
          return{ ...state,counter: state.counter + Action.value}
        }
        ),
        on(change,
          state=>{
            
            return{
              ...state,name:"Monkey.D.Luffy"
            }
          })
)

export function reducerFunction(state:any,reducer:any){
  return _reducerFunction(state,reducer)
}