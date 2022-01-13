import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { saveUsuario } from '../usuario.action';
import { selectUsuarioById } from '../usuario.selectors';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})
export class UsuarioFormComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>) { }

  ngOnInit(): void {
    this.createFormGroup();
    this.route.paramMap.subscribe(paramMap => {
      if (paramMap.has('id')) {
        const id = paramMap.get('id');
        if (id && +id > 0) {
          this.editar(+id);
        }
      }
    });
  }

  onSubmit(): void {
    this.store.dispatch(saveUsuario({ usuario: this.form.value }));
    this.voltar();
  }

  editar(id: number) {
    this.store.select(selectUsuarioById(id)).subscribe(usuario => {
      if (usuario) {
        this.form.patchValue(usuario);
      }
    });
  }

  voltar() {
    this.router.navigate(['page/usuario']);
  }

  private createFormGroup(): void {
    this.form = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      cpf: ['', Validators.required],
      phone: [''],
      email: ['', Validators.email],
    })
  }

}


