import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudio',
  templateUrl: './estudio.component.html',
  styleUrls: ['./estudio.component.css']
})
export class EstudioComponent implements OnInit {
  public rock: any[]= []
  constructor( private http: HttpClient) { }

  ngOnInit(): void {

    this.http
    .get(
      'https://videoteca-api.vercel.app/api/videos'
      )
      .subscribe((resp: any) => {
      this.rock = resp.filter((video:any) => video.category === 'Rock')
      
      
    })
  }
}
