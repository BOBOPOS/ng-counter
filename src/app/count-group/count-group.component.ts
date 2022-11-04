import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';
import { Counter } from '../models/counter.model';

@Component({
  selector: 'app-count-group',
  templateUrl: './count-group.component.html',
  styleUrls: ['./count-group.component.scss']
})
export class CountGroupComponent implements OnInit {
  counters: Counter[] = []
  constructor() { }

  ngOnInit(): void {
  }

  doCreateCounter(): void { 
    this.counters.push(new Counter(0))
  }

  sumCounts(): number { 
    let total = 0
    for (const counter of this.counters) { 
      total += counter.count;
    }
    return total
  }

  reset(): void { 
    for (const counter of this.counters) { 
      counter.count = 0;
    }
  }

}
