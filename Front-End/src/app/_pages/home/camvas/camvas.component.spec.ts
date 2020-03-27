import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamvasComponent } from './camvas.component';

describe('CamvasComponent', () => {
  let component: CamvasComponent;
  let fixture: ComponentFixture<CamvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
