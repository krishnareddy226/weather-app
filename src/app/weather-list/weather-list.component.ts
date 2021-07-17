import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})
export class WeatherListComponent implements OnInit {
  title = 'European weather forecast';
  weathers = [];
  constructor(private service: WeatherService) { }

  ngOnInit(): void {
    this.getWeathers();
  }
  
  getWeathers() {
    let locations = this.service.getAllLocations();
    this.service.getWeathers(locations).subscribe(
      (res: any) => {
        this.weathers = res.list;
      },
      error => {
        console.log('Weather request failed', error);
      }
    )
  }

}
