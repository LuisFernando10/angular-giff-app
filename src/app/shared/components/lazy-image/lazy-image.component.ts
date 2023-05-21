import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit {
  @Input()
  public imageUrl!: string;

  @Input()
  public imageAlt: string = '';

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.imageUrl) throw 'URL property is required';
  }

  onLoad() {
    console.log('Imagen Czargada');
    this.hasLoaded = true;
  }
}
