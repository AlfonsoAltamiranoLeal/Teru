import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResPasComponent } from './res-pas.component';

describe('ResPasComponent', () => {
  let component: ResPasComponent;
  let fixture: ComponentFixture<ResPasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResPasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResPasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
