import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingFullPageComponent } from './loading-full-page.component';

describe('LoadingFullPageComponent', () => {
  let component: LoadingFullPageComponent;
  let fixture: ComponentFixture<LoadingFullPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingFullPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingFullPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
