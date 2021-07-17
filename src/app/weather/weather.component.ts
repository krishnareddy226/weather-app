import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  @Input() weather;

  constructor() { }

  ngOnInit(): void {
  }

  getDate(dt, timezone) {
    return new Date(dt*1000 -(timezone*1000));
  }

}
