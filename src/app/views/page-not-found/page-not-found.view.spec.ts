import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundView } from './page-not-found.view';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundView;
  let fixture: ComponentFixture<PageNotFoundView>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageNotFoundView]
    });
    fixture = TestBed.createComponent(PageNotFoundView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
