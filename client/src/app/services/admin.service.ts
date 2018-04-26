import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/do';

@Injectable()
export class AdminService {

  constructor(private http: HttpClient) {
  }

  getAllCompanies():Observable<any>
  {
    const httpOptions = {headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'responseType': 'application/json'
      })
    };
    return this.http.post('http://localhost:3000/admin/getAllCompanies', httpOptions).map(res=> {return res;});
  }

}
