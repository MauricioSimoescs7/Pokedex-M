import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/pokemon-list/pokemon-list.component').then(m => m.PokemonListComponent)
  },
  {
    path: 'pokemon/:id',
    loadComponent: () => import('./components/pokemon-detail/pokemon-detail.component').then(m => m.PokemonDetailComponent)
  }
];
