import { Injectable } from '@angular/core';
// import { Alert } from '../alert.service'
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { User } from '../classes/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {

  public currentUser: Observable<User | null>;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private db: AngularFirestore
  ) { 

this.currentUser = this.afAuth.authState
    .switchMap((user)=> {
      if (user){
        return this.db.doc<User>(`users/${user.uid}`).valueChanges();
      } else Observable.of(null);
    })
  }


  public signup(firstName: string, lastName: string, email: string, password: string): Observable<boolean>{
    return Observable.fromPromise(
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user)=>{
        const userRef: AngularFirestoreDocument<User> = this.db.doc(`users/${user.uid}`);
        return true;
      })
    )

  }

  public login(email: string, password: string): Observable<boolean>{
    return Observable.of(true);
  }

  public logout(): void{
    this.router.navigate(['/login']);
  }
}
