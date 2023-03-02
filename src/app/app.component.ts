import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from './../environments/environment';
import { DataModel } from './models/data_model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../styles.scss'],
})
export class AppComponent implements OnInit {
  data: DataModel = new DataModel();
  activeState: boolean[] = [false, false, false, false, false, false];
  inProgress = true;
  noData = false;
  noDataInfo = 'This page is under maintenance, please come back later.';
  carouselValue: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const url = environment.apiUrls.v1 + 'data';
    this.setCarouselValues(window.innerWidth);
    this.http
      .get<DataModel>(url)
      .pipe<DataModel>(
        catchError((err) => {
          this.noData = true;
          return throwError(() => this.noDataInfo);
        })
      )
      .subscribe((res) => {
        this.inProgress = false;
        this.data = res;
      });
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.setCarouselValues(window.innerWidth);
  }

  setCarouselValues(width: number) {
    this.carouselValue =
      width < 440
        ? 1
        : width < 640
        ? 2
        : width < 840
        ? 3
        : width < 1200
        ? 4
        : 5;
  }
}
