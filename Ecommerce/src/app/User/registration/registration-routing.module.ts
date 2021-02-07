import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { RegistrationComponent } from './registration.component';

const routes: Route[] = [
  {path: 'signup', component: RegistrationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
