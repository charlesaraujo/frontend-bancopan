import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNovoUsuarioComponent } from './modal-novo-usuario.component';

describe('ModalNovoUsuarioComponent', () => {
  let component: ModalNovoUsuarioComponent;
  let fixture: ComponentFixture<ModalNovoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNovoUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalNovoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title modal', () => {
    const fixture = TestBed.createComponent(ModalNovoUsuarioComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#tituloModalNovoUsuario')?.textContent).toContain('Cadastrar novo usuário');
  });

  it('should render name user', () => {
    const fixture = TestBed.createComponent(ModalNovoUsuarioComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#nameId')?.textContent).toContain('Cadastrar novo usuário');
  });
});
