import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaserWidgetPlaceholderComponent } from './teaser-widget-placeholder.component';

describe('TeaserWidgetPlaceholderComponent', () => {
  let component: TeaserWidgetPlaceholderComponent;
  let fixture: ComponentFixture<TeaserWidgetPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeaserWidgetPlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaserWidgetPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
