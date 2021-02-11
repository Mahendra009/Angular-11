import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './User/login/login.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Home/header/header.component';
import { RegistrationModule } from './User/registration/registration.module';
import { PagenotfoundModule } from './pagenotfound/pagenotfound.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    RegistrationModule,
    PagenotfoundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
