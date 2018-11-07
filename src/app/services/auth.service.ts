import { Injectable } from '@angular/core';
// import { Alert } from '../alert.service'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../classes/user';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
// import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {

  public currentUser: Observable<firebase.User | null>;

  constructor(
    private router: Router,
    private firebaseAuth: AngularFireAuth
    ) { 
      this.currentUser = firebaseAuth.authState;
  }


  public signup(firstName: string, lastName: string, email: string, password: string){
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });    
  }

  public login(email: string, password: string){
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  public logout(){
    this.firebaseAuth
      .auth
      .signOut();
  }
}
