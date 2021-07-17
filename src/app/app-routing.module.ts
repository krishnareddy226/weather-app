import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { WeatherListComponent } from './weather-list/weather-list.component';

const routes: Routes = [
  {
    path: '',
    component: WeatherListComponent
  }, 
  {
    path: 'forcast/:location',
    component: WeatherDetailsComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
