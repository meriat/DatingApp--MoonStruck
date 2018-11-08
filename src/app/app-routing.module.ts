import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ChatComponent } from "./pages/chat/chat.component"
import { SplashComponent } from './splash/splash.component';
import { MatchesComponent } from './matches/matches.component';
import { ProfileComponent } from './profile/profile.component';
import { SurveyComponent } from './survey/survey.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
    { path: '', component: SplashComponent},
    { path: '', pathMatch: 'full', redirectTo: '/login'},
    { path: 'match' , component: MatchesComponent},
    { path: 'survey' , component: SurveyComponent},
    { path:'profile', component: ProfileComponent},
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'chat', component: ChatComponent, canActivate: [AuthGuard]},
    { path: '**', redirectTo:'/login'}
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);