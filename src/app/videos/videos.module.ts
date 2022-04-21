import { AppRoutingModule } from './../routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosComponent } from './videos/videos.component';
import { SafePipe } from './safe.pipe';
import { RecitalesComponent } from './recitales/recitales.component';
import { DocumentalesComponent } from './documentales/documentales.component';
import { EstudioComponent } from './estudio/estudio.component';
import { EntrevistasComponent } from './entrevistas/entrevistas.component';
import { HomeComponent } from './home/home.component';
import { DetalleComponent } from './detalle/detalle.component';



@NgModule({
  declarations: [
    VideosComponent,
    SafePipe,
    RecitalesComponent,
    DocumentalesComponent,
    EstudioComponent,
    EntrevistasComponent,
    HomeComponent,
    DetalleComponent,
    
  ],
  imports: [
    CommonModule, AppRoutingModule
  ], exports: [VideosComponent, EntrevistasComponent, AppRoutingModule
  ]
})
export class VideosModule { }
