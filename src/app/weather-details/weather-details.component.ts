import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {
  forcast: any;
  constructor(private service: WeatherService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let location = this.route.snapshot.paramMap.get('location');
    this.getForcat(location);
  }

  getForcat(location) {
    this.service.getForcat(location).subscribe(
      (res: any) => {
        this.forcast = res;
      }
    )
  }

}
