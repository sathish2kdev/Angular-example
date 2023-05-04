import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    const headers ={
      'content-type':'application/json'
    }
    return this.http.get<any>("http://localhost:8080/sms",{headers});
  }
  
}
