import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder,  Validators,  FormArray } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit, OnDestroy {

  clientForm = this.fb.group({
    razaoSocial: ['', Validators.required],
    nomeFantasia: [''],
    endereco: this.fb.group({
      logradouro: [''],
      cidade: [''],
      estado: [''],
      cep: ['']
    }),
    responsaveis: this.fb.array([
      this.fb.control('')
    ]),
    telefones: this.fb.array([
      this.fb.control('')
    ]),
    emails: this.fb.array([
      this.fb.control('')
    ])
  });

  id: string;
  subscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subscription = this.route.queryParams.subscribe(this.resolveQueryParams);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  resolveQueryParams(params: Params) {
    console.log(params);
    this.id = params['id'];
  }
  
  onSubmit() {
    console.log(this.clientForm.value);
  }

  /** Responsáveis */ 

  get responsaveis() {
    return this.clientForm.get('responsaveis') as FormArray;
  }

  addResponsavel() {
    this.responsaveis.push(this.fb.control(''));
  }

  removeResponsavel(index: number) {
    console.log('index', index);
    this.responsaveis.removeAt(index);
  }

  /** Telefones */ 

  get telefones() {
    return this.clientForm.get('telefones') as FormArray;
  }

  addTelefone() {
    this.telefones.push(this.fb.control(''));
  }

  removeTelefone(index: number) {
    console.log('index', index);
    this.telefones.removeAt(index);
  }

  /** E-mails */

  get emails() {
    return this.clientForm.get('emails') as FormArray;
  }

  addEmail() {
    this.emails.push(this.fb.control(''));
  }

  removeEmail(index: number) {
    console.log('index', index);
    this.emails.removeAt(index);
  }

  showInput(index, formArray) {
    return index === (formArray.controls.length - 1);
  }

  seeEmails() {
    console.log(this.emails)
  }

}
