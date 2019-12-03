import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCollectionsComponent } from './video-collections.component';

describe('VideoCollectionsComponent', () => {
  let component: VideoCollectionsComponent;
  let fixture: ComponentFixture<VideoCollectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoCollectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
