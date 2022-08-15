import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, Observer } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConstantService } from './constant.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private constantService: ConstantService) { }

  getService(url: String): Observable<any> {
    return new Observable<any>((observer: Observer<any>) => {
      this.http.get(environment.apiUrl + url).subscribe(res => {
        observer.next(res);
        observer.complete();
      }, err => {
        observer.next(err);
        observer.complete();
      })
    })
  }


  postService(url: String, data:any): Observable<any> {
    return new Observable<any>((observer: Observer<any>) => {
      this.http.post(environment.apiUrl + url, data).subscribe(res => {
        observer.next(res);
        observer.complete();
      }, err => {
        observer.next(err);
        observer.complete();
      })
    })
  }

}
