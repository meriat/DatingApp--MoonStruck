import { Component, OnInit} from '@angular/core';
import { SurveyComponent } from '../survey/survey.component'
 @Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
 })

 export class MatchesComponent {

  public showBrown:boolean = false;
  public showBlue:boolean=false;
  public showGreen:boolean=false;
  public showRed:boolean=false;
  public showYellow:boolean=false;
  public buttonBlue:any = 'Show Blue Matches';
  public buttonRed:any = 'Show Red Matches';
  public buttonYellow: any= "Show Yellow Matches";
  public buttonGreen:any="Show Green Matches";
  public buttonBrown:any="Show Brown Matches";
   
  ngOnInit(){}
 
  
 toggleBrown() {
    this.showBrown = !this.showBrown;
     if(this.showBrown)  
      this.buttonBrown = "Hide Brown Matches";
      
    else
      this.buttonBrown = "Show Brown Matches";  
  }
  toggleRed(){
    this.showRed = !this.showRed;
    if(this.showRed)  
     this.buttonRed = "Hide Red Matches";
     
   else
     this.buttonRed = "Show Red Matches";  
  }
  toggleGreen(){
    this.showGreen = !this.showGreen;
    if(this.showGreen)  
     this.buttonGreen = "Hide Green Matches";
     
   else
     this.buttonGreen = "Show Green Matches";  
  }
  toggleBlue(){
    this.showBlue = !this.showBlue;
    if(this.showBlue)  
     this.buttonBlue = "Hide Blue Matches";
     
   else
     this.buttonBlue = "Show Blue Matches";  
  }
  toggleYellow(){
    this.showYellow = !this.showYellow;
    if(this.showYellow)  
     this.buttonYellow = "Hide Yellow Matches";
     
   else
     this.buttonYellow = "Show Yellow Matches";  
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