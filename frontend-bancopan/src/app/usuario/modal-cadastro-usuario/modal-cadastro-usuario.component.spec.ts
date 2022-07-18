import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCadastroUsuarioComponent } from './modal-cadastro-usuario.component';

describe('ModalCadastroUsuarioComponent', () => {
  let component: ModalCadastroUsuarioComponent;
  let fixture: ComponentFixture<ModalCadastroUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCadastroUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCadastroUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
