import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignInProgressComponent } from './campaign-in-progress.component';

describe('CampaignInProgressComponent', () => {
  let component: CampaignInProgressComponent;
  let fixture: ComponentFixture<CampaignInProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignInProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignInProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
