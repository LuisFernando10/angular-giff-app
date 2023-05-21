import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, GifSearchResponse } from '../interface/gifs.interface';

@Injectable({ providedIn: 'root' })
export class GifsService {
  private _tagsHistory: string[] = [];
  private _GIF_APIKEY: string = 'HbfLG24MZdnzj5qmhMGU750n89wk4YOK';
  private _serviceURL: string = 'https://api.giphy.com/v1/gifs/';

  public gifList: Gif[] = [];

  constructor(private http: HttpClient) {
    this.readLocalStorage();
  }

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
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('tagsHistory', JSON.stringify(this._tagsHistory));
  }

  private readLocalStorage(): void {
    if (!localStorage.getItem('tagsHistory')) return;
    this._tagsHistory = JSON.parse(localStorage.getItem('tagsHistory')!);

    if (this._tagsHistory.length === 0) return;
    this.searchTag(this._tagsHistory[0]);
  }

  searchTag(newTag: string): void {
    if (!newTag.length) return;

    this.organizeHistory(newTag);

    const params = new HttpParams()
      .set('api_key', this._GIF_APIKEY)
      .set('q', newTag)
      .set('limit', 10);

    this.http
      .get<GifSearchResponse>(`${this._serviceURL}search`, { params })
      .subscribe((resp) => {
        this.gifList = resp.data;
      });
  }
}
