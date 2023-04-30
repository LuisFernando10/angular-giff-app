import { Component, ElementRef, ViewChild } from '@angular/core';

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
  constructor() {}

  @ViewChild('txtTagInput')
  public txtTag!: ElementRef<HTMLInputElement>;

  searchTag() {
    console.log({ val: this.txtTag.nativeElement.value });
  }
}
