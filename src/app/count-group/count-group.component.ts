import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';
import { Counter } from '../models/counter.model';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-count-group',
  templateUrl: './count-group.component.html',
  styleUrls: ['./count-group.component.scss']
})
export class CountGroupComponent implements OnInit {
  counters: Counter[] = []
  constructor(private counterService: CounterService) {
    console.log(counterService.counter)
  }

  ngOnInit(): void {
  }

  doCreateCounter(): void { 
    this.counters.push(new Counter(0))
  }

  sumCounts(): number { 
    const total = this.counterService.sumCounter(this.counters)
    return total
  }

  reset(): void { 
    for (const counter of this.counters) { 
      counter.count = 0;
    }
  }

}
