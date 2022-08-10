import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MusicArtistDetailsService {

  constructor(private http: HttpClient) { }

  getArtistDetail(): Observable<any> {
    return this.http.get('https://api.deezer.com/artist/13');
  }
}
