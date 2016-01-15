import {inject} from 'aurelia-framework';
import {Settings} from '../services/Settings';

@inject(Settings)
export class MmeAlgorithmSettings {

  constructor(Settings) {
    this.settings = Settings;
  }
}
