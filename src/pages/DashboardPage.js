import {inject} from 'aurelia-framework';
import {Settings} from '../services/Settings';

export class DashboardPage {
  
  static inject = [Settings];

  heading = 'Dashboard';

  constructor(Settings){
    this.Settings = Settings;
  }
}
