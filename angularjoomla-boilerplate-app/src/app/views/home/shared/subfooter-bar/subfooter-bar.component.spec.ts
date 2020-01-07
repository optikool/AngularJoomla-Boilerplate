import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubfooterBarComponent } from './subfooter-bar.component';

describe('SubfooterBarComponent', () => {
  let component: SubfooterBarComponent;
  let fixture: ComponentFixture<SubfooterBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubfooterBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubfooterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
