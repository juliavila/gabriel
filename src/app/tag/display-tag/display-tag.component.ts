import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display-tag',
  templateUrl: './display-tag.component.html',
  styleUrls: ['./display-tag.component.css']
})

export class DisplayTagComponent {
  @Input() value: string;
  @Input() removable: void;
  @Output() remove = new EventEmitter<string>();
}
