import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Game } from '../interfaces/interfaces';
import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private games: Game[] = [];

  constructor( private http: HttpClient ) { }

  getNominees() {

    if (this.games.length > 0) {

      // No Games
      console.log('From Cache');
      return of(this.games);

    }else {

      console.log('From Internet');
      return this.http.get<Game[]>(`${environment.url}/api/goty`)
            .pipe(

              tap(

                games => this.games = games
              )
            );
    }
  }

  voteGame(id: string) {

    return this.http.post(`${environment.url}/api/goty/${id}`, {})
        .pipe(

          catchError(err => {

            return of(err.error);
          })
        );
  }
}
