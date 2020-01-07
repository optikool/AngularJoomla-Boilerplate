import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosCollectionComponent } from './videos-collection.component';

describe('VideosCollectionComponent', () => {
  let component: VideosCollectionComponent;
  let fixture: ComponentFixture<VideosCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
