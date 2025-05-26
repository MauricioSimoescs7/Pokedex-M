
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map, switchMap } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  getPokemonList(limit: number = 151): Observable<Pokemon[]> {
    return this.http.get<{ results: { name: string, url: string }[] }>(`${this.apiUrl}?limit=${limit}`).pipe(
      map(response => response.results),
      switchMap(results => {
        const pokemonRequests = results.map(result =>
          this.http.get<Pokemon>(result.url)
        );
        return forkJoin(pokemonRequests);
      })
    );
  }

  getPokemonById(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiUrl}/${id}`);
  }
}
