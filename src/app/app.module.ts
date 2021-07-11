import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingComponent } from './components/home/landing/landing.component';
import { HomeCarouselComponent } from './components/home/home-carousel/home-carousel.component';
import { MiddleCardsComponent } from './components/home/middle-cards/middle-cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HalloffameComponent } from './components/halloffame/halloffame.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    HomeCarouselComponent,
    MiddleCardsComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    HalloffameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
