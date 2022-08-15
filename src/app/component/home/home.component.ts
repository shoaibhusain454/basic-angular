import { Component, OnInit } from '@angular/core';
import { ApiService, ConstantService } from './../../service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiService: ApiService, private constantService: ConstantService) {
    // console.log("Current API URL:", environment.apiUrl);
  }

  ngOnInit(): void {
    // this.apiService.getService(this.constantService.APIConfig.USER_LOGIN).subscribe((data) => {
    //   console.log(data);
    // })
  }

}
