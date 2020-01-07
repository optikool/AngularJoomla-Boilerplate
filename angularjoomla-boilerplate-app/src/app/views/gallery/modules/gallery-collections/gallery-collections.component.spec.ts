import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryCollectionsComponent } from './gallery-collections.component';

describe('GalleryCollectionsComponent', () => {
  let component: GalleryCollectionsComponent;
  let fixture: ComponentFixture<GalleryCollectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryCollectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
