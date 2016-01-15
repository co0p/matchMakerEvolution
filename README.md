# Match Maker Evolution

Finding matches of people using an evolution inspired genetic algorithm.


## Rational

If you want to group / match people based on many criteria such as department, age, sex, ... a simple random generator does not suffice. Using a genetic algorithm that ranks found matches according to a combined criteria and merges promising matches with each other (eg. breeding new candidates) and adding a little evolutionary randomness you most likely will get a better random match.


## How it works


### basic algorithm

In this implementation we use an elitist genetic algorithm with one-point crossover.
* Initialization: Create the initial generation of random candidates
* Selection:
 * Calculate the fitness of each candidate
 * Take the fittest n candidates for breeding
 * Take the fittest m candidates as the elite and move it untouched to the next generation
* Breeding:
 * Create new candidates bases on the n candidates using crossover
 * Do some mutation to the candidates for randomness
* Termination / Repeat: Decided to stop based on the number of repetitions or combine elite with the newly created candidates and go back to the selection phase.

We will use a one -point crossover function which takes two candidates and creates two children with each child having one half of the parent. The place of crossover is chosen randomly:

    Parent 1:   abcdefghij         Child 1:    abcdepqrst
    crossover:      x        ==>
    Parent 2:   klmnopqrst         Child 2:    klmnofghij

Using only crossover it is possible that we are optimizing towards a local optimum. Therefore we will add some random mutation to randomly selected candidates after crossover, allowing the evolution to 'step' out of the local optimum:

    value range = [a, ..., z]   ==>  b
    candidate: klmnofghij ==> klmnofgh<i>j ==> klmnofghbj


## Developing

To install the development environment, run

    npm install
    jspm install -y

To kick off website, run

    gulp watch

In a new terminal start the json-server (which will serve data at http://localhost:3000):

   json-server server/db.json

To bundle and export your changes, run

    gulp build
    gulp export
