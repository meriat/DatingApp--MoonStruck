import { Injectable } from '@angular/core';
// import { Alert } from '../alert.service'
import { Observable } from 'rxjs';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/observable/of';
import { database } from 'firebase/app';

@Injectable()

export class MatchService {
  matches: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.matches = database.list('user/results')
   }

   getMatches(){
     return this.matches;
   }

   addEntry(newEntry) {
     this.matches.push(newEntry);
   }

}
