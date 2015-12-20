Match Maker Evolution
=====================

Finding matches of people using an evolution inspired genetic algorithm.


Rational
--------
If you want to group / match people based on many criteria such as department,
age, sex, ... a simple random generator does not suffice. Using a genetic algorithm
that ranks found matches according to a combined criteria and merges promising
matches with each other (eg. breeding new candidates) and adding a little evolutionary
randomness you most likely will get a better random match.


Developing
----------
To install the development environment, run

    npm install
    jspm install -y

To kick off website, run

    gulp watch

To bundle and export your changes, run

    gulp build
    gulp export
