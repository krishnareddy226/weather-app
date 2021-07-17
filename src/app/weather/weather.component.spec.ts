import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { data } from '../shared/data';

import { WeatherComponent } from './weather.component';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have london weather', () => {
    component.weather = data.weathers.list[0];
    fixture.detectChanges();
    expect(component.weather.name).toEqual('London');
  });

  it('should have date', () => {
    component.weather = data.weathers.list[0];
    fixture.detectChanges();
    let date = component.getDate('1626523768', '3600')
    expect(date).toBeTruthy();
  });
});
