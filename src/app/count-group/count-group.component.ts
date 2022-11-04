import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-group',
  templateUrl: './count-group.component.html',
  styleUrls: ['./count-group.component.scss']
})
export class CountGroupComponent implements OnInit {
  counters: number[] = []
  constructor() { }

  ngOnInit(): void {
  }

  doCreateCounter(): void { 
    this.counters.push(0)
  }

}
