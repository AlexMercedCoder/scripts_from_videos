import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  counter = 0;
  cheese = 'gouda';
  data:DataService;

  constructor(data:DataService) {
    this.data = data
  }

  addOne() {
    this.counter += 1;
  }

  ngOnInit(): void {}
}
