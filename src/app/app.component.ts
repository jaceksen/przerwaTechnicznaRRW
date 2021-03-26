import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'przerwaTechniczna2';

  kiedyStart = '';

  constructor(
    public http: HttpClient
  ) {}

  ngOnInit() {
    this.http.get('../../../assets/kiedyStart', {responseType: 'text'})
      .subscribe(data => {
        console.log('dd', data);
        this.kiedyStart = data
      });
  }
}
