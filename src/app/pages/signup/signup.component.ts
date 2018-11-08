import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from 'app/services/auth.service';
import { Router } from '@angular/router';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {

  private isLoggedIn: Boolean;
  public signupForm: FormGroup;
  private subsriptions: Subscription[] = [];
  email: string;
  password: string;
  //alterserve
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    // private loadingService :LoadingService
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subsriptions.forEach(sub => sub.unsubscribe())
  }
  private createForm(): void {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  signup(userEmail: string, userPassword: string) {
    this.authService.signup(userEmail,userPassword);
    this.isLoggedIn = true;
    this.router.navigate(['/chat']);
  }

  // public submit(): void {
  //   if (this.signupForm.valid) {
  //     const { firstName, lastName, email, password } = this.signupForm.value;
  //     this.subsriptions.push(
  //       this.auth.signup(firstName, lastName, email, password).subscribe(success => {
  //         if (success) {
  //           this.router.navigate(['/chat']);
  //         }

  //         //this.loadingService.isLoading.next(false);
  //       })
  //     )
  //     //console.log(`FirstName: ${firstName}, LastName: ${lastName}, Email: ${email}, Password: ${password}`);
  //   } else {
  //     //  const failedSingedAlter = new  Alert('try again',Alert);

  //   }
  // }
}
