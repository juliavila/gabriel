import { Component } from '@angular/core';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent {

  removeTag(event) {
    console.log('remove', event);
  }

  addTag(event) {
    console.log(event);
  }
}
