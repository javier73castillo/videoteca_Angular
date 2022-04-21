import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-documentales',
  templateUrl: './documentales.component.html',
  styleUrls: ['./documentales.component.css']
})
export class DocumentalesComponent implements OnInit {
  public documentales: any[]= []
  constructor( private http: HttpClient) { }

  ngOnInit(): void {

    this.http
    .get(
      'https://videoteca-api.vercel.app/api/videos'
      )
      .subscribe((resp: any) => {
      this.documentales = resp.filter((video:any) => video.category === 'Documental')
      
      
    })
  }


}
