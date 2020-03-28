import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawnArrayComponent } from './drawn-array.component';

describe('DrawnArrayComponent', () => {
  let component: DrawnArrayComponent;
  let fixture: ComponentFixture<DrawnArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawnArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawnArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
