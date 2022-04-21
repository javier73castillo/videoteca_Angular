import { VideosService } from './../services/videos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  video!: any;

  constructor(private videoService: VideosService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params)=>{
     
      const {_id} = params
      
      this.video = this.videoService.getVideoById(_id);
    })
  }

}
