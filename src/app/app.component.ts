import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from './../environments/environment';
import { DataModel } from './models/data_model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  data: DataModel = new DataModel();
  activeState: boolean[] = [false, false, false, false, false, false];
  inProgress = true;
  noData = false;
  noDataInfo = 'This page is under maintenance, please come back later.';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const url = environment.apiUrls.v1 + 'data';

    this.http
      .get<DataModel>(url)
      .pipe<DataModel>(
        catchError((err) => {
          this.noData = true;
          return throwError(this.noDataInfo);
        })
      )
      .subscribe((res) => {
        this.inProgress = false;
        this.data = res;
      });
  }
}
