import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralActivityDetailFormComponent } from './general-activity-detail-form.component';

describe('GeneralActivityDetailFormComponent', () => {
  let component: GeneralActivityDetailFormComponent;
  let fixture: ComponentFixture<GeneralActivityDetailFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralActivityDetailFormComponent]
    });
    fixture = TestBed.createComponent(GeneralActivityDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
