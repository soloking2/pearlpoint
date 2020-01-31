import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignStepsComponent } from './campaign-steps.component';

describe('CampaignStepsComponent', () => {
  let component: CampaignStepsComponent;
  let fixture: ComponentFixture<CampaignStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
