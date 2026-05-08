import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonButton, IonSpinner, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonInput } from '@ionic/angular/standalone';
import { PokemonService } from 'src/app/services/pokemon.service';


@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonButton, IonSpinner, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonInput, CommonModule, FormsModule]
})
export class Tab3Page {
  pokemonName: string = "";
  pokemon : any;
  loading = false;

  constructor(private pokemonService: PokemonService){}

  searchPokemon(){
    if (!this.pokemonName) return;

    this.loading = true;

    this.pokemonService
  .getPokemonDetails(this.pokemonName.toLowerCase())

    .subscribe({
      next: (data:any) => {
        this.pokemon = data;
        this.loading = false;
      },

      error: () =>{
        alert('Pokémon no encontrado')
        this.loading = false;
      }
    });
  }
}
