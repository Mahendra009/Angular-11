import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './User/login/login.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Home/header/header.component';
import { RegistrationModule } from './User/registration/registration.module';
import { PagenotfoundModule } from './pagenotfound/pagenotfound.module';
import { MenuComponent } from './Home/menu/menu.component';
import { FooterComponent } from './Home/footer/footer.component';
import { CarousalComponent } from './Home/Carousal/carousal/carousal.component';
import { DealsoftehdayComponent } from './Home/Carousal/dealsoftehday/dealsoftehday.component';
import { TrendingComponent } from './Home/Carousal/trending/trending.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    CarousalComponent,
    DealsoftehdayComponent,
    TrendingComponent
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
