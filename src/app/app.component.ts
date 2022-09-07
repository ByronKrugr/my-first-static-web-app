import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MusicArtistDetailsService } from './services/musicArtist/music-artist-details.service';

@Component({
  selector: 'app-root',
  template: `<div>Hello {{value}}</div><div>{{ artistDetail$ | async | json }}</div><div>{{ deezer$ | async | json }}</div>`,
})
export class AppComponent {
  value = 'World';
  public artistDetail$: Observable<any>;
  public deezer$: Observable<any>;

  constructor(
    private artistService: MusicArtistDetailsService,
    private http: HttpClient) {

    this.artistDetail$ = this.artistService.getArtistDetail();
    this.deezer$ = this.getArtistDetailsById();
  }


  // constructor(private http: HttpClient) { }

  getArtistDetailsById(id?: string | null): Observable<any> {
    // return this.http.get('/api/artist/' + id);//https://api.deezer.com
    // return this.http.get('https://api.deezer.com/artist/' + id);//https://api.deezer.com

    // return this.http.jsonp('https://api.deezer.com/artist/' + id + '?output=jsonp&callback=ng_jsonp_callback_0', "JSONP_CALLBACK");

    return this.http.jsonp('https://api.deezer.com/artist/1' + '?output=jsonp&callback=ng_jsonp_callback_0', 'a');//.pipe(map(this.a)) //(this.extractData);;//, "JSONP_CALLBACK");
    // return this.http.get('https://catfact.ninja/fact')
  }

  a(b: any) {
    console.log(b)

  }
}
