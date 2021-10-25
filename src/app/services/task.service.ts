import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Task} from "../models/task.model";

const baseUrl = 'http://localhost:8080/api/v1/tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Task[]> {
    return this.http.get<Task[]>(baseUrl);
  }

  getAllByRequisitionId(requisitionId: any): Observable<Task[]> {
    return this.http.get<Task[]>(baseUrl, { params: new HttpParams().set('requisition_id', requisitionId) });
  }

  get(id: any): Observable<Task> {
    return this.http.get(`${baseUrl}/${id}`);
  }
}
