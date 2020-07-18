import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import * as M from 'materialize-css/dist/js/materialize.js';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  instance: any = null;

  constructor(public moviesService: MoviesService) {

  }

  ngOnInit(): void {
    const instance = M.Tabs.init( document.querySelectorAll('.tabs'), {} );
  }

}
