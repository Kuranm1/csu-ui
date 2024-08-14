import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  private baseUrl = 'http://localhost:8080/warehouses';

  constructor(private http: HttpClient) { }

  getWarehouses(): Observable<any> {
    return this.http.get(`${this.baseUrl}`, {withCredentials: true });
  }

  addWarehouse(warehouse: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, warehouse, {withCredentials: true });
  }

  deleteWarehouse(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {withCredentials: true });
  }

  exportWarehouses(): Observable<any> {
    return this.http.get(`${this.baseUrl}/export`, {responseType: 'text', withCredentials: true });
  }
}
