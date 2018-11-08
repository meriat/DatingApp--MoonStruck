import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { LoginComponent } from '../pages/login/login.component';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [AuthService]
})
export class ProfileComponent implements OnInit {
  user: Observable<firebase.User>;
 
  constructor(
    private auth: AuthService
  ) { 
    this.user = auth.currentUser;

  }

  ngOnInit() {
  }
  
  public logout(){
    this.auth.logout();
  }
}
