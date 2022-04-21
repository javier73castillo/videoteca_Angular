import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { jitOnlyGuardedExpression } from '@angular/compiler/src/render3/util';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  public _historial: string[] = [];
  public busqueda:any[]=[];
  public resultadosUrl:any[] =  [];
  public valor:string = '';
 
  
  constructor(private http: HttpClient) {

    this.http
    .get(
      'https://videoteca-api.vercel.app/api/videos'
      )
      .subscribe((resp: any) => {
        
       this.resultadosUrl = resp;
       this._historial = this.resultadosUrl;
     
     })
   }
  buscarVideos(query: string = ''){
    query = query.trim().toLocaleLowerCase();
    this.valor = query;
    this.resultadosUrl = this._historial;
    if(query.length && !this._historial.includes(query)) {
        this.busqueda = this.resultadosUrl.filter(video => video.title.trim().toLowerCase().includes(query))
    
        if(this.busqueda) 
        
        {this.resultadosUrl = this.busqueda;
          } 

       }

   
}
getVideoById(id: string): any{
    return this.resultadosUrl.find(({_id})=> id === _id)

}
}
