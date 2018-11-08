
import { OnInit, Component } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';
import { MatchService } from 'app/services/match.service';

import { ProfileComponent } from '../profile/profile.component'


@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
  providers: [AuthService, MatchService, AngularFireDatabase]
})

export class SurveyComponent implements OnInit {
  model;
  trait;
  user;
  userEmail;
  matches;
  constructor(
    private auth: AuthService,
    private matchService: MatchService,
    db: AngularFireDatabase, 
    // afAuth: AngularFireAuth
  ) {
    this.model = {
      question1: "",
      question2: "",
      question3: "",
      question4: "",
      question5: ""

    };

    // console.log(this.model);
  }

  ngOnInit() {
    this.matchService.getMatches().subscribe(dataLastEmittedFromObserver => {
      this.matches = dataLastEmittedFromObserver;
      console.log(this.matches);
    });

    this.user = firebase.auth().currentUser;

    if (this.user != null) {
      this.userEmail = this.user.email;
      console.log(this.userEmail);
    } else {
      console.log("Null");
    }
  }

  // ngDoCheck() {
    

    
  // }

  findTrait() {
    if ((this.model.question1 === 'romantic' || this.model.question1 === 'clubbing') && (this.model.question2 === 'relax' || this.model.question2 === 'sun') && this.model.question3 === 'true' && this.model.question4 === 'no' && (this.model.question5 === 'loyal' || this.model.question5 === 'success')) {
      this.trait = "blue";
    }
    else if ((this.model.question1 === 'boring' && this.model.question1 === 'clubbing') && (this.model.question2 === 'sun' || this.model.question2 === 'activity') && this.model.question3 === 'not' && this.model.question4 === 'yes' && (this.model.question5 === 'fun' || this.model.question5 === 'success')) {
      this.trait = "yellow";
    }
    else if ((this.model.question1 === 'boring' || this.model.question1 === 'romantic') && (this.model.question2 === 'explore' || this.model.question2 === 'activity') && (this.model.question3 === 'false' || this.model.question3 === 'not') && this.model.question4 === 'yes' && (this.model.question5 === 'fun' || this.model.question5 === 'loyal')) {
      this.trait = "red";
    }
    else if ((this.model.question1 === 'romantic' || this.model.question1 === 'boring') && (this.model.question2 === 'activity' || this.model.question2 === 'relax') && this.model.question3 === 'not' && (this.model.question4 === 'no' || this.model.question4 === 'yes') && (this.model.question5 === 'success' || this.model.question5 === 'loyal')) {
      this.trait = "green";
    }
    else {
      this.trait = "brown";
    }
    this.updateColorInDB(this.trait)
  }

  updateColorInDB(newColor: string) {
    let changed: boolean = false;
    this.matches.forEach(element => {
      if (element.email == this.userEmail) {
        console.log(element);
        element.color = newColor;
        changed = true;
      }
    });
    if (changed == false) {
      console.log("new entry");
      let newUserName = "New User";
      if (this.user.displayName != null) {
        newUserName = this.user.displayName;
      }
      let newResult = {
        color: newColor,
        email: this.userEmail,
        username: newUserName
      }
      this.matchService.addEntry(newResult);
      console.log(this.matches);
    }
  }

}

