export class Settings {

  /* boosts */
  minBoost = 0;
  maxBoost = 10;

  sexBoost = 5;
  departmentBoost = 5;
  matchBoost = 5;

  groupCount = 5;


  /* genetic algorithm settings*/
  populationCount = 100;
  populationMin = 10;
  populationMax = 1000;

  evolutionsCount = 40;
  evolutionsMin = 10;
  evolutionsMax = 1000;

  eliteCount = 5;
  eliteMin = 1;
  eliteMax = this.populationCount / 3;
}
