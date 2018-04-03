import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UserServiceProvider Provider');
  }
  getMatches() {
    return this.http.get('http://worldcup.sfg.io/matches');
  }
  getTeams() {
    return this.http.get('http://worldcup.sfg.io/teams/results');
  }

}
