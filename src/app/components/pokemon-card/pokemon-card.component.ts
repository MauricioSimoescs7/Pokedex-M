// pokemon-card.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {
  @Input() pokemon!: Pokemon;
  @Output() clicked = new EventEmitter<number>();

  getImage(): string {
    return this.pokemon.sprites.other?.['official-artwork'].front_default ||
           this.pokemon.sprites.front_default;
  }

  getTypeClass(): string {
    return this.pokemon.types[0].type.name;
  } 
}
