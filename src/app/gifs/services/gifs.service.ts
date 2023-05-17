import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GifsService {
  private _tagsHistory: string[] = [];

  get tagHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(newTag: string) {
    newTag = newTag.toLowerCase();

    if (this._tagsHistory.includes(newTag)) {
      this._tagsHistory = this._tagsHistory.filter((tag) => tag !== newTag);
    }

    this._tagsHistory.unshift(newTag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
  }

  searchTag(newTag: string): void {
    if (!newTag.length) return;

    this.organizeHistory(newTag);
  }
}
