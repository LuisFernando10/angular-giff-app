import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GifsService {
  private _tagsHistory: string[] = [];
  private _GIF_APIKEY: string = 'HbfLG24MZdnzj5qmhMGU750n89wk4YOK';

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

  async searchTag(newTag: string): Promise<void> {
    if (!newTag.length) return;

    this.organizeHistory(newTag);

    fetch(
      'https://api.giphy.com/v1/gifs/search?api_key=HbfLG24MZdnzj5qmhMGU750n89wk4YOK&q=Dragon ball&limit=10'
    )
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  }
}
