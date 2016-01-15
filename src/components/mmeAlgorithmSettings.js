import {inject} from 'aurelia-framework';
import {Settings} from '../services/Settings';

export class MmeAlgorithmSettings {

  static inject = [Settings];

  constructor(Settings) {
    this.settings = Settings;
  }
}
