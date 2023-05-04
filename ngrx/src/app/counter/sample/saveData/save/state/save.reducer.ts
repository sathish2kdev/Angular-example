import { createReducer, on } from "@ngrx/store";
import { saveCustomerDetails, saveData } from "./save.action";
import { serviceCommonSave } from "./save.state";

const _saveReducer = createReducer(
    serviceCommonSave,
    on(saveCustomerDetails,
        // (state,action) => (
        //     {...state,
        //         customerDetails:[...action.customerDetails]
        //     }
        // )
        (state,action) =>{
            let customerDetails = {...action.customerDetails}
          //  customerDetails.id = (state.customerDetails.length + 1);
            return {
                ...state,
                customerDetails:[...state.customerDetails,customerDetails]
            }
        }
    ),
    on(saveData,
        (state,action) =>{
            let value = [...action.data]
            return {
                ...state,
                commonData:value
            }
        }
        )
)



export function saveReducer(state:any,reducer:any){
    return _saveReducer(state,reducer);
}