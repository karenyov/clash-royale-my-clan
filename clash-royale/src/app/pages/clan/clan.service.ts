import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ClanService {

  private url: string = environment.apiUrl + '/clan/' + environment.clanTag;

  constructor(private http: HttpClient) { }

  getClan() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': environment.apiToken
      })
    };
    return this.http.get(this.url, httpOptions);
  }

}
