import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  isLogin:Boolean = false

  constructor(private helperService: HelperService) { }

  ngOnInit(): void {
    if(this.helperService.lsGetItem('token') && this.helperService.lsGetItem('email') )
    this.isLogin = true
    else
    this.isLogin = false
  }

}
