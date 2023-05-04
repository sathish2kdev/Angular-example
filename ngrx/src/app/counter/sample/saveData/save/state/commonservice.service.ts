import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  constructor(private http:HttpClient) { }


  getData():Observable<any>{
    const headers = {
      "content-type":"application/json"
    }

    return this.http.post<any>(`http://localhost:8090/api/value`,{},{headers});
  }

  // getTcDashBoardDetails(): Observable<any>{
  //   const headers = {
  //   "Content-type": "application/json",
  //   'Authorization':" Bearer" +" "+ localStorage.getItem("token"),
  //   };
  //   return this.http.post<any>(`${this.url.baseUrl}`+`${this.url.getTcDashBoardDetails}`,{},{headers});
  //   }
}
