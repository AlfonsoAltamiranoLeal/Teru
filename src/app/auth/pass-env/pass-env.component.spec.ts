import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassEnvComponent } from './pass-env.component';

describe('PassEnvComponent', () => {
  let component: PassEnvComponent;
  let fixture: ComponentFixture<PassEnvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassEnvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassEnvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
