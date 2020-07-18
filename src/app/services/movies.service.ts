import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoMovies } from '../interfaces/info-movies.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  info: InfoMovies;
  infoCargada = false;

  movies: any[] = [];

  constructor(private http: HttpClient) {
    this.cargarInfo();
  }

  private cargarInfo() {
    // OBTENIENDO EL ARCHIVO JSON
    this.http.get('assets/data/movies.json')
    .subscribe( (resp: any[]) => {
      this.movies = resp;
      // console.log(resp);
    });
  }


}
