import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherService } from '../services/weather.service';

import { WeatherListComponent } from './weather-list.component';
import {data} from '../shared/data';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('WeatherListComponent', () => {
  let component: WeatherListComponent;
  let fixture: ComponentFixture<WeatherListComponent>;
  const weatherService = jasmine.createSpyObj('WeatherService', ['getWeathers', 'getAllLocations']);


  beforeEach(async () => {
    weatherService.getWeathers.and.returnValue(of(data.weathers));
    weatherService.getAllLocations.and.returnValue(of(data.locations));
    await TestBed.configureTestingModule({
      declarations: [ WeatherListComponent ],
      imports: [HttpClientTestingModule],
      providers: [{provide: WeatherService, useValue: weatherService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'European weather forecast'`, () => {
    const fixture = TestBed.createComponent(WeatherListComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('European weather forecast');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(WeatherListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('European weather forecast');
  });

  it('should call getWeathers', () => {
    const fixture = TestBed.createComponent(WeatherListComponent);
    fixture.detectChanges();
    let component = fixture.componentInstance;
    component.getWeathers();
    expect(component.weathers).toBeTruthy();
  });

  it('Weathers length should be 5', () => {
    const fixture = TestBed.createComponent(WeatherListComponent);
    fixture.detectChanges();
    let component = fixture.componentInstance;
    component.getWeathers();
    weatherService.getWeathers.and.returnValue(of(data.weathers));
    expect(component.weathers.length).toEqual(5);
  });

  it('First weather should be london', () => {
    const fixture = TestBed.createComponent(WeatherListComponent);
    fixture.detectChanges();
    let component = fixture.componentInstance;
    component.getWeathers();
    weatherService.getWeathers.and.returnValue(of(data.weathers));
    expect(component.weathers[0].name).toEqual('London');
  });

});
