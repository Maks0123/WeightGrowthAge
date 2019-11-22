import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountWeightComponent } from './count-weight.component';

describe('CountWeightComponent', () => {
  let component: CountWeightComponent;
  let fixture: ComponentFixture<CountWeightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountWeightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
