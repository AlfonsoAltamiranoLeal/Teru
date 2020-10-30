import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioCComponent } from './inicio-c.component';

describe('InicioCComponent', () => {
  let component: InicioCComponent;
  let fixture: ComponentFixture<InicioCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
