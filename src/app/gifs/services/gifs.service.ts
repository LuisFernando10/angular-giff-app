import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GifsService {
  private _tagsHistory: string[] = [];
  private _GIF_APIKEY: string = 'HbfLG24MZdnzj5qmhMGU750n89wk4YOK';
  private _serviceURL: string = 'https://api.giphy.com/v1/gifs/';

  constructor(private http: HttpClient) {}

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

    const params = new HttpParams()
      .set('api_key', this._GIF_APIKEY)
      .set('q', newTag)
      .set('limit', 10);

    this.http.get(`${this._serviceURL}search`, { params }).subscribe((resp) => {
      console.log(resp);
    });
  }
}
