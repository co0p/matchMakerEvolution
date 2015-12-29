import {inject} from 'aurelia-framework';
import {Settings} from '../services/Settings';

@inject(Settings)
export class DashboardPage {
  heading = 'Dashboard';

  constructor(Settings){
    this.Settings = Settings;
  }
}
