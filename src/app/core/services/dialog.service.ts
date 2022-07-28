import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DialogService {
  public width = {
    'medium': '400px',
    'large': '500px'
  }

  constructor() { }

  getWitdhDialog(action: 'medium' | 'large') {
    return this.width[action]
  }
}
