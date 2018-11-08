import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { LoginComponent } from '../pages/login/login.component';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';
import { MatchService } from 'app/services/match.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [AuthService, MatchService, AngularFireDatabase]
})
export class ProfileComponent implements OnInit {

  user;
  matches;
  constructor(
    private auth: AuthService,
    private matchService: MatchService,
    db: AngularFireDatabase, 
    // afAuth: AngularFireAuth
  ) { 
    this.user = firebase.auth().currentUser;

  }

  ngOnInit() {
    this.matchService.getMatches().subscribe(dataLastEmittedFromObserver => {
      this.matches = dataLastEmittedFromObserver;
      console.log(this.matches);
    });
  }
  
  public logout(){
    this.auth.logout();
  }
}
