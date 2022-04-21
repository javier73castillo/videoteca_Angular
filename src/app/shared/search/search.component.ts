
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { VideosService } from 'src/app/videos/services/videos.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
@ViewChild ('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
public resultadosUrl: any[] =[];

  constructor(private videoService: VideosService,private http: HttpClient) { }
  buscar(){
    this.videoService.buscarVideos(this.txtBuscar.nativeElement.value);
    this.txtBuscar.nativeElement.value = '';
    
 }
 ngOnInit(): void {
   
 }
  

}
