import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { APP_CONFIG } from '../helpers/app.config';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObjectHelper } from '../helpers/object.helper';

@Injectable({
  providedIn: 'root',
})
export class BaseApi<T> {
  protected baseUrl: string = APP_CONFIG.API_SERVER

  constructor(
    protected httpClient: HttpClient,
  ) { }

  get(id: string): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/${id}`).pipe(
      map(this.getData)
    );
  }

  getAll(params?: { [param: string]: any }): Observable<any> {
    if (params) { ObjectHelper.removeEmptyValues(params); }

    return this.httpClient.get<T[]>(`${this.baseUrl}`, { params }).pipe(
      map(this.getData)
    );
  }

  post(resource: any, headers?: HttpHeaders): Observable<T> {
    return this.httpClient.post<T>(`${this.baseUrl}`, resource, { headers }).pipe(
      map(this.getData)
    );
  }

  put(resource?: any, id?: string | number[]): Observable<T> {
    return this.httpClient.put<T>(`${this.baseUrl}${id ? '/' + id : ''}`, resource).pipe(
      map(this.getData)
    );
  }

  patch(resource?: any): Observable<T> {
    return this.httpClient.patch<T>(`${this.baseUrl}`, resource).pipe(
      map(this.getData)
    );
  }

  delete(id: string): Observable<null> {
    const END_POINT = `${this.baseUrl}/${id}`;
    return this.httpClient.delete<null>(END_POINT).pipe(
      map(this.getData)
    );
  }

  protected getData(jsonData: any) {
    if (jsonData) {
      return jsonData;
    } else {
      throwError(() => new Error(jsonData));
    }
  }
}
