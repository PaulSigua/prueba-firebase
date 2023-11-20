import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prueba-firebase';

  pages = [
    { enlace: 'Tareas', path: 'pages/tareas'},
    { enlace: 'Lista', path: 'pages/tareas-listado'},
  ];

  router: Router;

  constructor(router: Router) {
    this.router = router;
  }
}
