import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor(private http: HttpClient){ }

  calculateExpense(data: any) {
    return this.http.post("http://localhost:9000/nagar", data, {observe:"response"}).subscribe(res=>console.log(res))
  }
}
