import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosSingleComponent } from './videos-single.component';

describe('VideosSingleComponent', () => {
  let component: VideosSingleComponent;
  let fixture: ComponentFixture<VideosSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
