import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from 'app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  public loginForm: FormGroup;
  private subscription: Subscription [] = [];
  private returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
    ) { 
    this.createForm();
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/chat';
  }

private createForm(): void{
  this.loginForm = this.fb.group({
    email:['',[Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
}

public submit(): void {
  if (this.loginForm.valid){
    //this.loadingService.isLoading.next(true);
    const{ email, password } = this.loginForm.value;

    this.subscription.push(
      this.auth.login(email, password).subscribe(success =>{
        if (success){
          this.router.navigateByUrl(this.returnUrl);

        }else{
        //  this.loadingService.isLoading.next(false);
        }
      })
    );

  } else {
  //  const failedLoginAlert =new Alert ("Your email or password were inavalid,try again",AlertType.Danger)
     // this.loadingService.isLoading.next(false);
  //   this.alterService.alert.next(faiedLoginAlert);
    

  }
}

ngOnDestroy(){
  this.subscription.forEach(sub => sub.unsubscribe());
}

}
