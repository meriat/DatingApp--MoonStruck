import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/login'},
    { path: 'login', component: LoginComponent}
];

// @NgModule({
//     imports:[RouterModule.forRoot(routes)],
//     exports: [RouterModule]
// })

// export class AppRoutingModule { }

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);