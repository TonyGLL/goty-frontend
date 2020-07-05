import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Game } from '../../interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  games: any[] = [];

  constructor( private db: AngularFirestore ) { }

  ngOnInit(): void {

    this.db.collection('goty').valueChanges()
        .pipe(

          map((resp: Game[]) => {

            // return resp.map( ({ name, votes }) => { name, value: votes } );
            return resp.map(game => {

              return {

                name: game.name,
                value: game.votes
              };
            });
          })
        )
        .subscribe(games => {

          console.log(games);
          this.games = games;
        });
  }

}
