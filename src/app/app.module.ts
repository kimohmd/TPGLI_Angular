import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponentComponent } from './pokemon-component/pokemon-component.component';
import { FormsModule } from '@angular/forms';
import { FilterPokemonPipePipe } from './filter-pokemon--pipe.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { PokemonServiceService } from './pokemon-service.service';
import { HttpClientModule } from '@angular/common/http';
import { DisplayPokemonComponentComponent } from './display-pokemon-component/display-pokemon-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponentComponent,
    FilterPokemonPipePipe,
    DisplayPokemonComponentComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
