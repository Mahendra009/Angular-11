import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound.component';

const routes: Route[] = [
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagenotfoundRoutingModule { }
