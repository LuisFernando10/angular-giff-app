import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interface/gifs.interface';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  @Input()
  public gif!: Gif;

  ngOnInit(): void {
    if (!this.gif) {
      throw 'The gif property is required';
    }
  }
}
