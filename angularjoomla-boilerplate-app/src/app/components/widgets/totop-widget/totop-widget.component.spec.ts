import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotopWidgetComponent } from './totop-widget.component';

describe('TotopWidgetComponent', () => {
  let component: TotopWidgetComponent;
  let fixture: ComponentFixture<TotopWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotopWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotopWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
