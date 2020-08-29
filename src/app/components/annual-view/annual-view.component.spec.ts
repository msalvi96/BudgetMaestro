import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualViewComponent } from './annual-view.component';

describe('AnnualViewComponent', () => {
  let component: AnnualViewComponent;
  let fixture: ComponentFixture<AnnualViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnualViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
