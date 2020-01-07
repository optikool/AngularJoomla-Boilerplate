import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyCaptionMovieComponent } from './fancy-caption-movie.component';

describe('FancyCaptionMovieComponent', () => {
  let component: FancyCaptionMovieComponent;
  let fixture: ComponentFixture<FancyCaptionMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FancyCaptionMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FancyCaptionMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
