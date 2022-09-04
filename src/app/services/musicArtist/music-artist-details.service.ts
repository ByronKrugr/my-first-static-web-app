import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MusicArtistDetailsService {

  constructor(private http: HttpClient) { }

  getArtistDetail(): Observable<any> {
    // return this.http.get('https://api.deezer.com/artist/13');
    // this.http.jsonp('https://api.deezer.com/artist/13?output=jsonp', 'JSONP_CALLBACK').subscribe((a) => {
    //   console.log(a)
    // });
    return this.http.get('https://catfact.ninja/fact');
    // .subscribe((fact: any) => {
    //   console.log(fact.fact)
    // });

    // return this.http.jsonp('https://api.deezer.com/artist/13?output=jsonp&callback=ng_jsonp_callback_0', 'JSONP_CALLBACK');

    // const headers = new HttpHeaders();
    // headers.set("credentials", "include");
    // return this.http.get('https://api.deezer.com/artist/13?output=json', { headers: headers });
  }

  // ng_jsonp_callback_0(a: any) {
  // console.log("eminem");
  // console.log(a);
  // }
}
