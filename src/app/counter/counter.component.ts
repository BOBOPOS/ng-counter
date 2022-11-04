import { Component, OnInit, Input } from '@angular/core';
import { Counter } from '../models/counter.model';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() counter: Counter = new Counter(0);
  constructor() { }

  ngOnInit(): void {
  }

  increase(): void {
    this.counter.count = this.counter.count + 1
  }
  decrease(): void {
    this.counter.count  = this.counter.count  - 1
  }

  isLargerOrEqualsThanZero(): boolean {
    return this.counter.count  >= 0;
  }

  isLessOrEqualsTen(): boolean {
    return this.counter.count  <= 10;
  }
  resetCount(): void {
    this.counter.count  = 0;
  }
}
