import { Injectable } from '@angular/core';
// import { Alert } from '../alert.service'
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { User } from '../classes/user';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {

  public currentUser: Observable<User | null>;

  constructor(
    private router: Router,
  ) { 
    this.currentUser = Observable.of(null);
  }


  public signup(firstName: string, lastName: string, email: string, password: string): Observable<boolean>{
    return Observable.of(true);
  }

  public login(email: string, password: string): Observable<boolean>{
    return Observable.of(true);
  }

  public logout(): void{
    this.router.navigate(['/login']);
  }
}
