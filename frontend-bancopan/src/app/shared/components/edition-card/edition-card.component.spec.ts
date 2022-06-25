import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionCardComponent } from './edition-card.component';

describe('EditionCardComponent', () => {
  let component: EditionCardComponent;
  let fixture: ComponentFixture<EditionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
