import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fg-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() public message: {
    title: string;
    subtitle: string;    
  }

  constructor() { }

  ngOnInit() {
  }

}