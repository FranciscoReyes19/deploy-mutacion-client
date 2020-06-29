import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  @Input() expedientes;
	constructor() { }

  ngOnInit() {
  }

}
