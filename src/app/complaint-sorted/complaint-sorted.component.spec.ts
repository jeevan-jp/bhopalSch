import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintSortedComponent } from './complaint-sorted.component';

describe('ComplaintSortedComponent', () => {
  let component: ComplaintSortedComponent;
  let fixture: ComponentFixture<ComplaintSortedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplaintSortedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintSortedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
