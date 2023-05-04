import { customerDetails } from "./model/save";

export interface commonSave{
    customerDetails: customerDetails[];
    commonData:any
}

export const serviceCommonSave:commonSave = {
    customerDetails: [],
    commonData:''
}