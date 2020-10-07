import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public idSelectedPokemon = new Subject<number>();

  constructor() { }
  // Q15
  // getIdSelectedPokemon() : number{

  //   return this.idSelectedPokemon;
  // }

  // setIdSelectedPokemon(id : number){
  //   this.idSelectedPokemon = id;
  // }

  getObservable(): Subject<Number>{
    return this.idSelectedPokemon;
  }

  setIdSelectedPokemon(id : number){
    this.idSelectedPokemon.next(id);
  }

}
