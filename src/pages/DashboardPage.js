import {inject} from 'aurelia-framework';
import {Configuration} from '../services/Configuration';

@inject(Configuration)
export class DashboardPage {
  heading = 'Dashboard';

  constructor(Configuration){
    this.Configuration = Configuration;
  }
}
