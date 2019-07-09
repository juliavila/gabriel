import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-tag',
  templateUrl: './input-tag.component.html',
  styleUrls: ['./input-tag.component.css']
})
export class InputTagComponent {
  @Output() add = new EventEmitter<string>();

  addTag(tag) {
    this.add.emit(tag.value);
    tag.value = '';
  }
}
