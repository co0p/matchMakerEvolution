import {inject} from 'aurelia-framework';
import {Settings} from '../services/Settings';

export class MmeMatchingSettings {

  static inject = [Settings];

  constructor(Settings) {
    this.settings = Settings;
  }
}
