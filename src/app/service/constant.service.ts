import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {
  public APIConfig = { 
     USER_LOGIN:'user/signin' 
    }
  constructor() { }
}
