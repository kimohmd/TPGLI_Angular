import { Component, Input, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IPokemon } from '../pokemon';
import { PokemonServiceService } from '../pokemon-service.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-display-pokemon-component',
  templateUrl: './display-pokemon-component.component.html',
  styleUrls: ['./display-pokemon-component.component.css'],
  providers: []
})
export class DisplayPokemonComponentComponent implements OnInit {
  @Input ('detail')
  detail : IPokemon;
  constructor(private pokemonService: PokemonServiceService,
    private sharedService: SharedService) { }

  ngOnInit(): void {
    //Q15
    //this.sharedService.getIdSelectedPokemon();
    this.sharedService.getObservable().subscribe(e=>console.log(e));
  }

}
