import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Counter } from '../models/counter.model';

import { CountGroupComponent } from './count-group.component';

describe('CountGroupComponent', () => {
  let component: CountGroupComponent;
  let fixture: ComponentFixture<CountGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountGroupComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CountGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add counter when click counter button', () => {
    // given
    component.counters = []
    // when
    component.doCreateCounter()
    // than
    expect(component.counters.length).toBe(1) 
  });

  it('should return counter group sum when sumCounts', () => {
    // given
    component.counters = [new Counter(1), new Counter(2)]

    // when
    const total = component.sumCounts();
    
    // than
    expect(total).toEqual(3)
  });

  it('should reset sum group sum when sumCounts', () => {
    // given
    component.counters = [new Counter(1), new Counter(2)]

    // when
    component.reset();

    const total = component.sumCounts();
    
    // than
    expect(total).toEqual(0)
  });
});
