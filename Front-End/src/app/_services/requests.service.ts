import { Injectable } from '@angular/core';
import { HttpClientModule , HttpClient ,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }


  postRequest(body){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
    return this.http.post<any>(environment.apiUrl, body, httpOptions)
  }
}
