import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Requisition} from "../models/requisition.model";

const baseUrl = 'http://localhost:8080/api/v1/requisitions';

@Injectable({
  providedIn: 'root'
})
export class RequisitionService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Requisition[]> {
    return this.http.get<Requisition[]>(baseUrl);
  }

  get(id: any): Observable<Requisition> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

}
