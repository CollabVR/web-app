import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityEnvironmentsFormComponent } from './activity-environments-form.component';

describe('ActivityEnvironmentsFormComponent', () => {
  let component: ActivityEnvironmentsFormComponent;
  let fixture: ComponentFixture<ActivityEnvironmentsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivityEnvironmentsFormComponent]
    });
    fixture = TestBed.createComponent(ActivityEnvironmentsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
