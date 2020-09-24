import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-component',
  templateUrl: './pokemon-component.component.html',
  styleUrls: ['./pokemon-component.component.css']
})
export class PokemonComponentComponent implements OnInit {

  id: string = 'hello!';
  pokemonList: Array<Pokemon> = [new Pokemon(1, "draco"), new Pokemon(2, "Sulfura"), new Pokemon(3, "Créfadet"), new Pokemon(4, "Smogogo")];
  selectedPokemon : Pokemon = this.pokemonList[0];
  filtre : String = '';
  constructor() { }

  ngOnInit(): void {

  }

  onClick($event){
console.log("pokémon recherché", this.selectedPokemon.id, "-" ,this.selectedPokemon.nom);

  }

}
