import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: ` <h5>Buscar:</h5>
    <input
      type="text"
      class="form-control"
      placeholder="Buscar gifs..."
      (keyup.enter)="searchTag()"
      #txtTagInput
    />`,
})
export class SearchBoxComponent {
  constructor(private gifsService: GifsService) {}

  @ViewChild('txtTagInput')
  public txtTag!: ElementRef<HTMLInputElement>;

  searchTag() {
    const newTag = this.txtTag.nativeElement.value;

    this.gifsService.searchTag(newTag);
    this.txtTag.nativeElement.value = '';
  }
}
