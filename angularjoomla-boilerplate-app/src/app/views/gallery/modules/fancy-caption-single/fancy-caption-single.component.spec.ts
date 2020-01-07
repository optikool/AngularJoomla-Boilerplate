import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyCaptionSingleComponent } from './fancy-caption-single.component';

describe('FancyCaptionSingleComponent', () => {
  let component: FancyCaptionSingleComponent;
  let fixture: ComponentFixture<FancyCaptionSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FancyCaptionSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FancyCaptionSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
