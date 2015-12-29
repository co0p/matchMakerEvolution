import {inject} from 'aurelia-framework';
import {Settings} from '../services/Settings';

@inject(Settings)
export class SettingsPage {
  heading = 'Settings';
  settings = {};

  constructor(Settings) {
    this.settings = Settings;
  }
}
