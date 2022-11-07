import { Injectable } from '@angular/core';
import { Counter } from '../models/counter.model';

@Injectable({
  providedIn: 'root'
})
  
export class CounterService {
  counter: Counter[] = [];
  constructor() {

  }

  sumCounter(counters: Counter[]): number { 
    let total = 0
    for (const count of counters) { 
      total += count.count;
    }
    return  total
  }
  
}
