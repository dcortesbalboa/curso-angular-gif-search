import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GifSearchResult, GifSearchResultData } from '../model/images.model';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _history:string[]=[];
  private apiKey: string='8382L8wIoOotDRpuM0If9o58GC5UW73Z';
  private serviceUrl: string= 'https://api.giphy.com/v1/gifs';
  public results: GifSearchResult[]=[];

  get history(): string[]{
    return [...this._history];
  }

  constructor(private httpClient: HttpClient  ){ 
    this._history= JSON.parse(localStorage.getItem('history')!) ?? [];
    
    this.results=JSON.parse(localStorage.getItem('gifHistory')!) ?? [];
   }

  searchGif(text: string){

    text=text.trim().toLowerCase();
    if(!this._history.includes(text)){
      this._history=this._history.splice(0, 10);
      this._history.unshift(text);
  
      localStorage.setItem('history', JSON.stringify(this._history));
  
    }

    this.httpRquest(text);
  }

  private httpRquest(text: string){

    const params=new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', text)
      .set('limit', '10');

    this.httpClient.get<GifSearchResultData>(`${this.serviceUrl}/search`, {params})
      .subscribe( resp=> {
        this.results=resp.data;
        localStorage.setItem('gifHistory', JSON.stringify(this.results));
      });
  
  }

}
