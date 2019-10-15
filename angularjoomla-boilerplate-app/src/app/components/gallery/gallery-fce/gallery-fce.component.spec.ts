import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryFceComponent } from './gallery-fce.component';

describe('GalleryFceComponent', () => {
  let component: GalleryFceComponent;
  let fixture: ComponentFixture<GalleryFceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryFceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryFceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
