import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AppSettings } from '../../config/app-settings';

@Injectable()
export class ClanService {

  private url: string = AppSettings.API_ENDPOINT + '/clans/' + AppSettings.CLAN_TAG + "?exclude=members";

  constructor(private http: HttpClient) { }

  getClan() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': AppSettings.API_TOKEN
      })
    };
    return this.http.get(this.url, httpOptions);
  }

}
