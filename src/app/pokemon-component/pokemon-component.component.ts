import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IPokemon, Pokemon } from '../pokemon';
import { PokemonServiceService } from '../pokemon-service.service';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-pokemon-component',
  templateUrl: './pokemon-component.component.html',
  styleUrls: ['./pokemon-component.component.css'],
  providers:[PokemonServiceService]
})
export class PokemonComponentComponent implements OnInit {

  id: string = 'hello!';
  selectedPokemon : Pokemon;
  filtre ='';
  pokemonList: Pokemon[]=[];
  pokemonDetail : IPokemon;
  //[new Pokemon(1, "draco"), new Pokemon(2, "Sulfura"), new Pokemon(3, "Créfadet"), new Pokemon(4, "Smogogo")];
  constructor(private pokemonService: PokemonServiceService, 
    private sharedService: SharedService) { }

  ngOnInit(): void {
    this.pokemonService.getAllPokemons(1050,0).subscribe((data) => {
      
      data.results.forEach((e, index)=>{
        this.pokemonList.push(new Pokemon(index+1, e.name, e.url));
      });
    }//this.selectedPokemon = this.pokemonList[0]; //pokemon selectionné par défaut est le premier de la liste
  )
  
  }

  onClick($event){

    //Q15
    //this.sharedService.setIdSelectedPokemon(this.selectedPokemon.id);
    
    
    if(this.selectedPokemon){
      this.pokemonService.getPokemonByName(this.selectedPokemon.nom).subscribe(data => {
      this.pokemonDetail = data;
      
  })
  this.sharedService.setIdSelectedPokemon(this.selectedPokemon.id);

  }
 
}

}
