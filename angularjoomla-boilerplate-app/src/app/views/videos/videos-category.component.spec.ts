import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosCategoryComponent } from './videos-category.component';

describe('VideosCategoryComponent', () => {
  let component: VideosCategoryComponent;
  let fixture: ComponentFixture<VideosCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
