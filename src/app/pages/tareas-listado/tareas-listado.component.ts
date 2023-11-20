import { Component, OnInit  } from '@angular/core';
import { Tareas } from 'src/modelos/tareas';
import { Router } from '@angular/router';
import { updateDoc, doc } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
import { TareasFirebaseService } from 'src/app/services/tareas-firebase.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-tareas-listado',
  templateUrl: './tareas-listado.component.html',
  styleUrls: ['./tareas-listado.component.scss']
})
export class TareasListadoComponent implements OnInit {

  tareas: Tareas[] = [];
  private subscription: Subscription;
  listaTareas: any;

  mostrarFormulario = false;
  tareaEditando!: Tareas;

  constructor(private router: Router,
    private tareasSer: TareasFirebaseService) {
    this.listaTareas = this.tareasSer.getTareas();
    this.listaTareas = this.tareasSer.getAll();
    this.subscription = this.listaTareas.subscribe((tareas: Tareas[]) => {
      this.tareas = tareas;
    });
  }


  ngOnInit(): void {
    this.tareasSer.getTareas().subscribe(tareas => {
      console.log(tareas);
      this.tareas = tareas;
    })
  }

  async actualizarReceta(tarea: Tareas) {
    this.tareaEditando = tarea;


  }
  
}
