import { RecitalesComponent } from './videos/recitales/recitales.component';
import { DocumentalesComponent } from './videos/documentales/documentales.component';
import { EntrevistasComponent } from './videos/entrevistas/entrevistas.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VideosComponent } from './videos/videos/videos.component';
import { EstudioComponent } from './videos/estudio/estudio.component';
import { HomeComponent } from './videos/home/home.component';
import { DetalleComponent } from './videos/detalle/detalle.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'entrevistas',
    component: EntrevistasComponent
  },
  {
    path: 'documentales',
    component: DocumentalesComponent
  },
  {
    path: 'estudio',
    component: EstudioComponent
  },
  {
    path: 'recitales',
    component: RecitalesComponent
  },
  {
    path: 'detalle/:_id',
    component: DetalleComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]
@NgModule({
  declarations: [],
  imports: [ CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
