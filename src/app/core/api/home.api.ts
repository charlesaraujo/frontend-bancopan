import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseApi } from './base.api';

@Injectable({
  providedIn: 'root'
})

export class HomeApi extends BaseApi<any> {
  constructor(
    private http: HttpClient
  ) {
    super(http);
  }

  public getDataUsersAPI() {
    return new Promise((resolve, reject) => {
      this.getAll().subscribe({
        next(response: any): any {
          if (response && Array.isArray(response)) {
            sessionStorage.setItem("users", JSON.stringify(response));
            resolve(response)
          }
          else {
            reject(null)
          }
        },
      });
    })
  }
}
