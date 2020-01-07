import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosMainComponent } from './videos-main.component';

describe('VideosMainComponent', () => {
  let component: VideosMainComponent;
  let fixture: ComponentFixture<VideosMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
