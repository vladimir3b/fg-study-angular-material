import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fg-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  public activateIt: boolean = false;
  constructor() { }

  ngOnInit() {
    setTimeout(() => this.activateIt = true, 2500);
  }

}