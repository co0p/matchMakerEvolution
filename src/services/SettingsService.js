import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class SettingsService {
  settings = [];

  constructor(http) {
    this.http = http;
  }

  load() {
    this.http.fetch()
      .then(response => response.json())
      .then(data => this.settings = data);
  }
}
