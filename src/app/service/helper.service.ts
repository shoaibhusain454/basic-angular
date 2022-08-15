import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  public lsSetItem(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  public lsGetItem(key: string) {
    return localStorage.getItem(key);
  }

  public lsRemove(key: string) {
    return localStorage.clear();
  }

  public lsClear(key: string) {
    return localStorage.clear();
  }
}
