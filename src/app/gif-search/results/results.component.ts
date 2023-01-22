import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { GifSearchResult } from '../model/images.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

  constructor(private gifSearch: GifsService) { }

  get results(): GifSearchResult[]{
    return this.gifSearch.results;
  }

}
