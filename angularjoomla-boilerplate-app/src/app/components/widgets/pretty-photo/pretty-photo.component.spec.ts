import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrettyPhotoComponent } from './pretty-photo.component';

describe('PrettyPhotoComponent', () => {
  let component: PrettyPhotoComponent;
  let fixture: ComponentFixture<PrettyPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrettyPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrettyPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
