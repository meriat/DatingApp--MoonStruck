import { Injectable } from '@angular/core';
// import { Alert } from '../alert.service'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../classes/user';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {
  currentUID: string;
  trait: string;

  public currentUser: Observable<firebase.User | null>;

  constructor(
    private router: Router,
    private firebaseAuth: AngularFireAuth
    ) { 
      this.currentUser = firebaseAuth.authState;
  }
  login(userEmail: string, userPassword: string) {
    this.firebaseAuth.auth.signInWithEmailAndPassword(userEmail,userPassword);
  }

  logout(){
    this.firebaseAuth.auth.signOut();
    this.router.navigate(['/login']);
  }

  signup(userEmail: string, userPassword: string) {
    this.firebaseAuth.auth.createUserWithEmailAndPassword(userEmail,userPassword).then( () => {
      this.currentUID = firebase.auth().currentUser.uid;
      console.log(this.currentUID);
      firebase.database().ref('users/' + this.currentUID);
    });
  }
}
