import { Component } from '@angular/core';
import { Tareas } from 'src/modelos/tareas';
import { Router } from '@angular/router';
import { TareasFirebaseService } from 'src/app/services/tareas-firebase.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent {

  tareas: Tareas = new Tareas();

  constructor(
    private router: Router,
    private tareasSer: TareasFirebaseService,) {

    let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if (params) {
      console.log(params)
      this.tareas = params['tareas']
    }
  }

  addTarea(newNota: HTMLInputElement, newFecha: HTMLInputElement, newEtiquetas: HTMLTextAreaElement) {
    if(!newNota || !newFecha || !newEtiquetas) {
      alert("sdddsdd");
    } else {
      const tarea = {
      nota: newNota.value,
      fecha: newFecha.valueAsDate,
      etiqueta: newEtiquetas.value
    }

    this.tareasSer.saveTareas(tarea);

    this.tareas = new Tareas();

    }
    
    alert("Se guardo su tarea");

    return false;
  }
}
