import { Component } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})

export class SurveyComponent {
  model;
  trait;
  constructor() {
    this.model = {
      question1: "",
      question2: "",
      question3: "",
      question4: "",
      question5: ""

    };
    // console.log(this.model);
  }

  findTrait() {
    if ((this.model.question1 === 'romantic' || this.model.question1 === 'clubbing') && (this.model.question2 === 'relax' || this.model.question2 === 'sun') && this.model.question3 === 'true' && this.model.question4 === 'no' && (this.model.question5 === 'loyal' || this.model.question5 === 'success')) {
      this.trait = "blue";
    }
    else if ((this.model.question1 === 'boring' && this.model.question1 === 'clubbing') && (this.model.question2 === 'sun' || this.model.question2 === 'activity') && (this.model.question3 === 'false' || this.model.question3 === 'not') && this.model.question4 === 'yes' && (this.model.question5 === 'fun' || this.model.question5 === 'success')) {
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
  }

}

