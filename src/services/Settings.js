export class Settings {

  groupCount = 5;

  /* boosts */
  minBoost = 0;
  maxBoost = 10;
  sexBoost = 5;
  departmentBoost = 5;
  matchBoost = 5;


  /* genetic algorithm settings*/

  mutationMin = 0;
  mutationMax = 1;
  mutationSteps = 0.01;
  mutationProbability = 0.01;

  crossover = true;

  generationCount = 100;
  generationMin = 10;
  generationMax = 1000;

  populationCount = 40;
  populationMin = 10;
  populationMax = 1000;

  eliteCount = 5;
  eliteMin = 1;
  eliteMax = this.populationCount / 3;
}
