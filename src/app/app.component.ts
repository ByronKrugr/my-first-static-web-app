import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MusicArtistDetailsService } from './services/musicArtist/music-artist-details.service';

@Component({
  selector: 'app-root',
  template: `<div>Hello {{value}}</div><div>{{ artistDetail$ | async | json }}</div>`,
})
export class AppComponent {
  value = 'World';
  public artistDetail$: Observable<any>;

  constructor(private artistService: MusicArtistDetailsService) {
    this.artistDetail$ = this.artistService.getArtistDetail();
  }
}
