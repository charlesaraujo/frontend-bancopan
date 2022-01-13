import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})
export class UsuarioFormComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createFormGroup();
  }

  onSubmit(): void {

  }

  private createFormGroup(): void {
    this.form = this.fb.group({
      name: ['',  Validators.required],
      cpf: ['', Validators.required],
      phone: [''],
      email: ['', Validators.email],
    })
  }

}
