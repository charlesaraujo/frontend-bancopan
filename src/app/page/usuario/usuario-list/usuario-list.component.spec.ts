import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { UsuarioService } from '../usuario.service';

import { UsuarioListComponent } from './usuario-list.component';
import { of } from 'rxjs';
import { CardComponent } from '@app/shared/components/card/card.component';

describe('UsuarioListComponent', () => {
  let component: UsuarioListComponent;
  let fixture: ComponentFixture<UsuarioListComponent>;
  let service: UsuarioService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ UsuarioListComponent, CardComponent ],
      providers: [
        UsuarioService,
        provideMockStore({ initialState: { loading: false } }),
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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
