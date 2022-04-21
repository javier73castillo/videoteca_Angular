import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-entrevistas',
  templateUrl: './entrevistas.component.html',
  styleUrls: ['./entrevistas.component.css']
})
export class EntrevistasComponent implements OnInit {
  public entrevistas: any[]= []
  constructor( private http: HttpClient) { }

  ngOnInit(): void {

    this.http
    .get(
      'https://videoteca-api.vercel.app/api/videos'
      )
      .subscribe((resp: any) => {
      this.entrevistas = resp.filter((video:any) => video.category === 'Entrevista')
      console.log(this.entrevistas)
      
    })
  }

}
