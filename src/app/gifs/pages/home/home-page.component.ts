import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interface/gifs.interface';

@Component({
  selector: 'gifs-home-page-home',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private gifsService: GifsService) {}

  get gifCardList(): Gif[] {
    return this.gifsService.gifList;
  }
}
