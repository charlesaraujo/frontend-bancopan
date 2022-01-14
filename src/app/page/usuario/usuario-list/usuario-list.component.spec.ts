import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { UsuarioService } from '../usuario.service';

import { UsuarioListComponent } from './usuario-list.component';
import { of } from 'rxjs';
import { Usuario } from '../usuario.model';
import { SharedModule } from '@app/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { AppState } from '@app/app.state';
import { selectUsuarios } from '../usuario.selectors';

describe('UsuarioListComponent', () => {
  let component: UsuarioListComponent;
  let fixture: ComponentFixture<UsuarioListComponent>;
  let service: UsuarioService;
  let store: MockStore<AppState>;

  const usuarios: ReadonlyArray<Usuario> = [{
    id: 1,
    name: 'Usuario 1',
    email: 'usuario@email.com',
    phone: '123456789',
    cpf: '17667385084'
  }];

  const initialState = {
    usuarios: usuarios,
    loading: false,
  };


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, SharedModule],
      declarations: [ UsuarioListComponent ],
      providers: [
        UsuarioService,
        provideMockStore({ initialState }),
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(UsuarioService);
    jest.spyOn(service, 'findAll').mockReturnValue(of([]));
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove', () => {
    const id = 1;
    component.remover(id);
    fixture.detectChanges();
    store.select(selectUsuarios).subscribe(usuarios => {
      expect(usuarios.length).toBe(0);
    });
  });

  it('should not remove', () => {
    const id = 2;
    component.remover(id);
    fixture.detectChanges();
    store.select(selectUsuarios).subscribe(usuarios => {
      expect(usuarios.length).toBe(1);
    });
  });

  it('should call service', () => {
    component.ngOnInit();
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should return usuarios', () => {
    jest.spyOn(service, 'findAll').mockReturnValue(of([...usuarios, ...usuarios]));
    component.ngOnInit();
    store.select(selectUsuarios).subscribe(usuarios => {
      expect(usuarios.length).toBe(2);
    });
  });
});
