import { Component, OnInit} from '@angular/core';
import { SurveyComponent } from '../survey/survey.component'
 @Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
 })

 export class MatchesComponent {

  public show:boolean = false;
  public buttonName:any = 'Show';
   
  ngOnInit(){}
 
  
 toggle() {
    this.show = !this.show;
     if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
   text = '';
  openFirstImg() {
  this.text = '' 
  }
  openSecondImg(){
  this.text = ''
  }
  openThirdImg(){
    this.text= ''
  }
 }