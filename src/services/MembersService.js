/*
currently defunct 24/12
*/

import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import {constants} from '../constants';
import 'fetch';

@inject(HttpClient, constants)
export class SettingsService {
  settings = {};

  constructor(http, constants) {
    this.http = http;
    this.constants = constants;
    this.apiPath = constants.url + '/configuration';
  }

  load() {
    return this.http.fetch(this.apiPath)
      .then(response => response.json())
      .then(data => {
        this.settings = data;
        console.log(this.settings);
      });
  }

  save() {
    console.log(this.settings);
    var request = new Request(this.apiPath, {
    	method: 'PUT',
      body: this.settings
    });

    return this.http.fetch(request)
      .then(response => response.json())
      .then(settings => {
        console.log(settings);
        this.settings = settings
      });
  }
}
