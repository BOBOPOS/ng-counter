import { TestBed } from '@angular/core/testing';
import { Counter } from '../models/counter.model';

import { CounterService } from './counter.service';

describe('CounterService', () => {
  let service: CounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should sum counts successful', () => {
    // given
    const counters: Counter[] = [new Counter(1), new Counter(2)]
    // when 
    const total = service.sumCounter(counters)

    // then
    expect(total).toEqual(3)
  });
});
