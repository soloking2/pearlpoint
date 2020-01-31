import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelExperienceComponent } from './travel-experience.component';

describe('TravelExperienceComponent', () => {
  let component: TravelExperienceComponent;
  let fixture: ComponentFixture<TravelExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
