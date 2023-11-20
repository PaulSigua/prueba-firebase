import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasListadoComponent } from './tareas-listado.component';

describe('TareasListadoComponent', () => {
  let component: TareasListadoComponent;
  let fixture: ComponentFixture<TareasListadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TareasListadoComponent]
    });
    fixture = TestBed.createComponent(TareasListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
