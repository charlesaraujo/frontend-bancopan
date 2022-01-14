import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { Usuario } from '../usuario.model';
import { selectUsuarios } from '../usuario.selectors';

import { UsuarioFormComponent } from './usuario-form.component';

describe('UsuarioFormComponent', () => {
  let component: UsuarioFormComponent;
  let fixture: ComponentFixture<UsuarioFormComponent>;
  let store: MockStore;

  const usuario: Usuario = {
    id: 1,
    name: 'Usuario 1',
    email: 'email@email',
    phone: '123456789',
    cpf: '17667385084'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [RouterTestingModule, ReactiveFormsModule],
      declarations: [UsuarioFormComponent],
      providers: [
        FormBuilder,
        provideMockStore({ initialState: { loading: false, usuarios: [usuario] } }),
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(
              convertToParamMap({
                id: '1',
              })
            )
          },
        },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form', () => {
    expect(component.form).toBeTruthy();
  });

  it('should edit form', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.form.value).toEqual(usuario);
  });

  it('should save form', () => {
    usuario.id = 2;
    component.form.patchValue(usuario);
    component.onSubmit();
    fixture.detectChanges();
    store.select(selectUsuarios).subscribe(usuarios => {
      expect(usuarios.length).toBe(2);
      expect(usuarios[1].id).toEqual(2);
    });
  });


});
