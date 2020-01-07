import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosFceComponent } from './videos-fce.component';

describe('VideosFceComponent', () => {
  let component: VideosFceComponent;
  let fixture: ComponentFixture<VideosFceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosFceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosFceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
