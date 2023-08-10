import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OurDoctorsComponent } from './our-doctors/our-doctors.component';
import { OurFacilitiesComponent } from './our-facilities/our-facilities.component';
import { OurServicesComponent } from './our-services/our-services.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'our-doctors',
    component: OurDoctorsComponent,
  },
  {
    path: 'our-facilities',
    component: OurFacilitiesComponent,
  },
  {
    path: 'our-services',
    component: OurServicesComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
