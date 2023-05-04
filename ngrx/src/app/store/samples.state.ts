import { saveReducer } from "../counter/sample/saveData/save/state/save.reducer";
import { commonSave } from "../counter/sample/saveData/save/state/save.state";
import { reducerFunctions } from "../counter/sample/state/sample.reducer";
import { Data } from "../counter/sample/state/sample.state";

export interface mainState{
    mainvalue:Data
    customerSave:commonSave
}

export const commonReducer = {
    mainReducer:reducerFunctions,
    crudReducer:saveReducer
}