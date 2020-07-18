import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  instance: any = null;

  constructor() { }

  ngOnInit() {
    const elements = document.querySelectorAll('.slider');
    const element = document.querySelector('.slider');
    M.Slider.init(elements, {
      indicators: true,
      duration: 200
    });
    this.instance = M.Slider.getInstance(element);

    M.Sidenav.init(document.querySelectorAll('.sidenav'), {});
  }

}
