import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { config } from 'src/fireconf/firebaseconf';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Galerie1Component } from './components/galerie1/galerie1.component';
import { Galerie2Component } from './components/galerie2/galerie2.component';
import { Galerie3Component } from './components/galerie3/galerie3.component';
import { CardComponent } from './components/card/card.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ProfilMessageComponent } from './components/profil-message/profil-message.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, DashboardComponent, NavbarComponent, Galerie1Component, Galerie2Component, Galerie3Component, CardComponent, HomePageComponent, DashboardPageComponent, ProfilMessageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config.firebase),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
