import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestablishedComponent } from './restablished.component';

describe('RestablishedComponent', () => {
  let component: RestablishedComponent;
  let fixture: ComponentFixture<RestablishedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestablishedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestablishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
