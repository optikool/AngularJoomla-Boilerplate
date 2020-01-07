import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderWidgetComponent } from './slider-widget.component';

describe('SliderWidgetComponent', () => {
  let component: SliderWidgetComponent;
  let fixture: ComponentFixture<SliderWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
