import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { VideosService } from './../services/videos.service';

@Component({
  selector: 'app-recitales',
  templateUrl: './recitales.component.html',
  styleUrls: ['./recitales.component.css']
})
export class RecitalesComponent implements OnInit {

  public recitales: any[]= []
  constructor( private http: HttpClient) { }

  ngOnInit(): void {

    this.http
    .get(
      'https://videoteca-api.vercel.app/api/videos'
      )
      .subscribe((resp: any) => {
      this.recitales = resp.filter((video:any) => video.category === 'Vivo')
      
      
    })
  }
}

