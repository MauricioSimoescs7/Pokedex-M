// pokemon-detail.component.ts
import { Component, Input } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent {
  @Input() pokemon!: Pokemon;

  getImage(): string {
    return this.pokemon.sprites.other?.['official-artwork'].front_default ||
           this.pokemon.sprites.front_default;
  }

  getTypeClass(): string {
    return this.pokemon.types[0].type.name;
  }

  getStatPercentage(statValue: number): string {
    const percentage = (statValue / 255) * 100;
    return `${percentage}%`;
  }
}
