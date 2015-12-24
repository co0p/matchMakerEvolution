import {inject} from 'aurelia-framework';
import {Configuration} from '../services/Configuration';

@inject(Configuration)
export class SettingsPage {
  heading = 'Settings';
  settings = {};

  constructor(Configuration) {
    this.Configuration = Configuration;
    this.settings = this.Configuration;
    console.log(this.settings);
  }
}
