import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { NavbarComponent } from './nav/navbar.component';
import { TravelExperienceComponent } from './travel/travel-experience.component';
import { CampaignStepsComponent } from './campaign/campaign-steps.component';
import { CampaignInProgressComponent } from './campaign/campaign-in-progress.component';
import {CarouselModule} from 'ngx-owl-carousel-o';
import { OwlCarouselComponent } from './owlCarousel/owl-carousel.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ShopModule } from './shop/shop.module';


@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    NavbarComponent,
    TravelExperienceComponent,
    CampaignStepsComponent,
    CampaignInProgressComponent,
    OwlCarouselComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]),
    BrowserAnimationsModule,
    CarouselModule,
    ShopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
