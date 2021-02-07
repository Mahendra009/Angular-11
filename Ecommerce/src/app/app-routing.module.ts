import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HeaderComponent } from './Home/header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './User/login/login.component';
import { RegistrationComponent } from './User/registration/registration.component';

const routes: Route [] = [
{path: '', redirectTo: 'home', pathMatch: 'full'},
{path: 'home', component: HeaderComponent},
{path: '**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
