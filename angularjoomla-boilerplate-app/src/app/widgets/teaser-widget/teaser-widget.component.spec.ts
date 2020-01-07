import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaserWidgetComponent } from './teaser-widget.component';

describe('TeaserWidgetComponent', () => {
  let component: TeaserWidgetComponent;
  let fixture: ComponentFixture<TeaserWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeaserWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaserWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
