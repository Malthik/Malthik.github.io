import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataModel } from './models/data_model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}
  data: DataModel = new DataModel();
  activeState: boolean[] = [false, false, false, false, false, false];

  ngOnInit() {
    const url = 'assets/data.json';
    this.http.get<DataModel>(url).subscribe((res) => {
      this.data = res;
    });
  }
}
