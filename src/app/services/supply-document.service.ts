import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplyDocumentService {

  private baseUrl = 'http://localhost:8080/supply-documents';

  constructor(private http: HttpClient) { }

  getSupplyDocuments(): Observable<any> {
    return this.http.get(`${this.baseUrl}`, {withCredentials: true });
  }

  addSupplyDocument(document: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, document, {withCredentials: true });
  }

  deleteSupplyDocument(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {withCredentials: true });
  }

  setSupplyDocumentStatus(document: any): Observable<any> {
    return this.http.put(`${this.baseUrl}`, document, {responseType: 'text', withCredentials: true });
  }
}
