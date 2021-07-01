import { Component } from '@angular/core';
import { IRichsApp } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements IRichsApp {
  componentConfig: any = {};
  title = 'ng12test';
}
