import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app--directive',
  templateUrl: './-directive.component.html',
  styleUrls: ['./-directive.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
