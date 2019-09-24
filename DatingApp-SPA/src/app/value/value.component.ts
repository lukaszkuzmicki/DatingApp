import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  //do tej zmiennej zapiszemy wartości z odpowiedzi z api
  values: any;

  constructor(private http: HttpClient) { }
  

  ngOnInit() {
    this.getValues();
  }

  getValues(){
    // API call from different host and get responce
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    })
  }

}
