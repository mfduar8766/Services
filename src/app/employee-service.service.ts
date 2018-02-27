import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'; 
import { HttpClient } from '@angular/common/http';
import {Employee} from './employee.interface';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EmployeeServiceService {
  private _url: string = "/assets/data/employees.json";


  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]>{      
    return this.http.get<Employee[]>(this._url);
  }
}
