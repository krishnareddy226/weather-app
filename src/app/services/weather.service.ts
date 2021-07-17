import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  locations = [
    {
      id: '2643743',
      name: 'London',
      country: 'uk'
    }, 
    {
      id: '2988507',
      name: 'Paris',
      country: 'es'
    },
    {
      id: '3117735',
      name: 'Madrid',
      country: 'es'
    },
    {
      id: '3128760',
      name: 'Barcelona',
      country: 'es'
    },
    {
      id: '2759794',
      name: 'Amsterdam',
      country: 'NL'
    }
  ]
  constructor(private http: HttpClient) { }

  getWeathers(locations) {
    let url = this.getGroupUrl(locations);
    return this.http.get(url);
  }

  getForecast(location) {
    return this.http.get(this.getUrl(location));
  }

  getUrl(location) {
    return environment.forcastApi + '?q=' + location + '&units=metric&APPID=' + environment.appId;
  }

  getAllLocations() {
    return this.locations.map(x => x.id).join(',');
  }

  getGroupUrl(locations) {
    return environment.groupApi + '?id=' + locations + '&units=metric&APPID=' + environment.appId;
  }
}
