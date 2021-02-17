import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HeaderComponent } from './Home/header/header.component';

const routes: Route[] = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HeaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
