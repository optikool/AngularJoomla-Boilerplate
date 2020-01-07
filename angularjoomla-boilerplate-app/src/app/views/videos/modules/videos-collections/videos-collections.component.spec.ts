import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosCollectionsComponent } from './videos-collections.component';

describe('VideosCollectionsComponent', () => {
  let component: VideosCollectionsComponent;
  let fixture: ComponentFixture<VideosCollectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosCollectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
