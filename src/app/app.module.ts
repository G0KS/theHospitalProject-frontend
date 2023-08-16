import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { OurFacilitiesComponent } from './our-facilities/our-facilities.component';
import { OurDoctorsComponent } from './our-doctors/our-doctors.component';
import { QuickHelpComponent } from './quick-help/quick-help.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    PageNotFoundComponent,
    OurServicesComponent,
    OurFacilitiesComponent,
    OurDoctorsComponent,
    QuickHelpComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
