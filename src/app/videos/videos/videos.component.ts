import { Component, OnInit } from '@angular/core';
import { VideosService } from './../services/videos.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

 
 get resultados(){
    return this.videoService.resultadosUrl
}
  constructor(private videoService: VideosService, private http: HttpClient) { }

  
  ngOnInit(): void {
    
      }
    
  }
  


