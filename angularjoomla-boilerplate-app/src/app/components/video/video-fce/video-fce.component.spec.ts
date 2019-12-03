import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoFceComponent } from './video-fce.component';

describe('VideoFceComponent', () => {
  let component: VideoFceComponent;
  let fixture: ComponentFixture<VideoFceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoFceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoFceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
