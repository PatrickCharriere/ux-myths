import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxMythComponent } from './ux-myth.component';

describe('UxMythComponent', () => {
  let component: UxMythComponent;
  let fixture: ComponentFixture<UxMythComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxMythComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxMythComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
