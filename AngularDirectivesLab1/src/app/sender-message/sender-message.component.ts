import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sender-message',
  templateUrl: './sender-message.component.html',
  styleUrls: ['./sender-message.component.css']
})
export class SenderMessageComponent implements OnInit {

  @Input()
  message: string = ""; 
  
  constructor() { }

  ngOnInit(): void {
  }

}
