import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { TareasComponent } from './pages/tareas/tareas.component';
import { TareasListadoComponent } from './pages/tareas-listado/tareas-listado.component';
import { RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'pages/tareas', pathMatch: 'full' },
  { path: 'pages/tareas', component: TareasComponent },
  { path: 'pages/tareas-listado', component: TareasListadoComponent },

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
