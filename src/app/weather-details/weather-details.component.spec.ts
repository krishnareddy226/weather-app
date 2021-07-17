import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { WeatherService } from '../services/weather.service';
import { data } from '../shared/data';

import { WeatherDetailsComponent } from './weather-details.component';

describe('WeatherDetailsComponent', () => {
  let component: WeatherDetailsComponent;
  let fixture: ComponentFixture<WeatherDetailsComponent>;
  let weatherService = jasmine.createSpyObj('WeatherService', ['getForecast']);


  beforeEach(async () => {
    weatherService.getForecast.and.returnValue(of(data.forecast));
    await TestBed.configureTestingModule({
      declarations: [ WeatherDetailsComponent ],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute, useValue: {snapshot: {paramMap: convertToParamMap({'location': 'london'})}}
        }, 
        {
          provide: WeatherService,
          useValue: weatherService
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as text 'Few forecasts'`, () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.few-forecast').textContent).toContain('Few forecasts');
  });

  it('should get forecast for London', () => {
    component.getForecast('London');
    weatherService.getForecast.and.returnValue(of(data.forecast));
    fixture.detectChanges();
    expect(component.forcast.city.name).toEqual('London');
  });


});
