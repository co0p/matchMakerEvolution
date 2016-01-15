import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

export class UsersService {

  static inject = [HttpClient];

  constructor(http) {
    this.http = http;
    this.apiPath = '/api/users';
  }

  getAll() {
    return this.http.fetch(this.apiPath)
          .then(response => response.json());
  }

  getById(id) {
    return this.http.fetch(this.apiPath + '/' + id)
          .then(response => response.json());
  }

  save(user) {
    var request = new Request(this.apiPath + '/' + user.id, {
    	method: 'PUT',
      body: user
    });

    return this.http.fetch(request)
      .then(response => response.json());
  }
}
