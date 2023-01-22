import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gif-search/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifSearch: GifsService) { }

  get history(): string[]{
    return this.gifSearch.history;
  }

  buscar(text: string){
    this.gifSearch.searchGif(text);
  }
}
