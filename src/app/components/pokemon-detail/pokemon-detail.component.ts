import { PokemonService } from './../../services/pokemon.service';
import { routes } from './../../routes.service';
// pokemon-detail.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { popResultSelector } from 'rxjs/internal/util/args';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit{
  @Input() pokemon!: Pokemon;
constructor(private route: ActivatedRoute, private PokemonService: PokemonService){}
loading=false;
error: string | null | undefined;

ngOnInit():void{
  this.CarregarPkemom();
}

private CarregarPkemom():void{
  const id=Number(this.route.snapshot.paramMap.get("id"));
  if(!id){return}
this.loading = true;
this.PokemonService.getPokemonById(id).subscribe({
  next:(result: Pokemon)=>{
    this.pokemon=result;
    this.loading=false
  }, error:(rrr)=>{
    this.error="erro ao carregar";
    this.loading= false
  }
})

}

  getImage(): string {
    return this.pokemon.sprites.other?.['official-artwork'].front_default ||
           this.pokemon.sprites.front_default;
  }

  getTypeClass(): string {
    return this.pokemon.types[0].type.name;
  }

  getStatPercentage(statValue: number): string {
  return `${Math.round((statValue / 255) * 100)}%`;
}
}
