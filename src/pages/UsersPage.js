import {inject} from 'aurelia-framework';
import {UsersService} from '../services/UsersService';

@inject(UsersService)
export class UsersPage {
  heading = 'Users';
  users = [];
  sortDir = -1;
  sortKey = 'address';

  constructor(UsersService) {
    this.UsersService = UsersService;
  }

  sortBy(key) {
    this.sortKey = key;
    this.sortDir = (-1) * this.sortDir;
    this.users = this.users.sort((item1, item2) => {
      if (item1[this.sortKey] === undefined || item2[this.sortKey] === undefined) {
        return 0;
      }
      return item1[this.sortKey].localeCompare(item2[this.sortKey]) * this.sortDir;
    });
  }

  activate() {
    this.UsersService.getAll()
        .then(users => {
          this.sortBy(this.sortKey);
          this.users = users;
          return this.users;
        });
  }

  bla(blaa) {
    console.log('bal', blaa);
  }
}
