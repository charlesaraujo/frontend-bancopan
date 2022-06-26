import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevNotesComponent } from './dev-notes.component';

describe('DevNotesComponent', () => {
  let component: DevNotesComponent;
  let fixture: ComponentFixture<DevNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
