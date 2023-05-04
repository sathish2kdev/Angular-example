import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { CommonserviceService } from "./commonservice.service";
import { getData, saveData } from "./save.action";

import { catchError, exhaustMap, map } from "rxjs/operators";
import { of } from "rxjs";
@Injectable()
export class SaveEffects{
    constructor(private action$:Actions,private service:CommonserviceService){}


// getData$ = createEffects(() => {
//     return this.action$.pipe(
//         ofType(getData),
//         exhaustMap((acrion:any) =>{

//         })
//     )
// })
getData$ = createEffect(() => {
    return this.action$.pipe(
        ofType(getData),
        exhaustMap(() => {
            return this.service.getData().pipe(
                map((data) => {
                    return saveData({data});
                }),
                catchError((errResp) => {
          
                    return of(saveData(errResp));
                  })
            )
        })
    )
    
 })
}

// getPartnerById$ = createEffect(() => {
//     return this.action$.pipe(
//       ofType(getPartnerByIdStart),
//       exhaustMap((action:any) => {
            
//         return this.partnersService.getPartnerById(action.partnerId).pipe(
//           map((partnersList) => {
            
//             // console.log(partnersList);
            
//               return getPartnerByIdSuccess({partnersList});
//           }),
//           catchError((errResp) => {
          
//             return of(getPartnerByIdSuccess(errResp));
//           })
      
//         );
//       })
//     );
//   });
// }
