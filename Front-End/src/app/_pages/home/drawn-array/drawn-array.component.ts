import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-drawn-array',
  templateUrl: './drawn-array.component.html',
  styleUrls: ['./drawn-array.component.scss']
})
export class DrawnArrayComponent implements OnInit {

  @Input() drawnArray;

  constructor() { }

  ngOnInit(): void {
  }

}
