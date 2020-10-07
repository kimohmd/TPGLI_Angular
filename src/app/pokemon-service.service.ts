import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { IPokemon, IPokemonRes } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  apiUrl: string = 'https://pokeapi.co/api/v2/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getAllPokemons(limit, offset): Observable<IPokemonRes>{
    let API_URL = `${this.apiUrl}pokemon`;
    let params = new HttpParams();
    params = params.append('limit', limit);
    params = params.append('offset', offset);
    return this.http.get<IPokemonRes>(API_URL,{ headers: this.headers, params: params }).pipe(
      catchError(this.error)
    );
  }

  getPokemonById(id):Observable<IPokemon>{
    let API_URL = `${this.apiUrl}pokemon/${id}`;
    return this.http.get<IPokemon>(API_URL,{ headers: this.headers}).pipe(
      catchError(this.error)
    );
  }

  getPokemonByName(name):Observable<IPokemon>{
    let API_URL = `${this.apiUrl}pokemon/${name}`;
    return this.http.get<IPokemon>(API_URL,{ headers: this.headers}).pipe(
      catchError(this.error)
    );
  }

  // Handle Errors 
  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
