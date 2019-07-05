import { Component } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {

  notasForm = this.fb.group({
    notas: this.fb.array([
      this.fb.control('')
    ])
  });
  
  constructor(private fb: FormBuilder,) { }

  onSubmit() {
    console.log(this.notasForm.value);
  }

  get notas() {
    return this.notasForm.get('notas') as FormArray;
  }

  addNota() {
    this.notas.push(this.fb.control(''));
  }

  removeNota(index: number) {
    console.log('index', index);
    this.notas.removeAt(index);
  }

}
