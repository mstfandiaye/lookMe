import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaceSnapListComponent } from './sace-snap-list/sace-snap-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path: 'facesnaps', component: SaceSnapListComponent},
  {path: '', component: LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
