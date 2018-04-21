import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogindepComponent } from './logindep.component';

describe('LogindepComponent', () => {
  let component: LogindepComponent;
  let fixture: ComponentFixture<LogindepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogindepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogindepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
