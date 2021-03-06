# Galactic Age Calculator

#### Epicodus Code Review #5: Test-Driven Development and Webpack

#### By Shannon Lee

#### _Table of Contents_

1. [Description](#description)
2. [Technologies Used](#technologies)
3. [Setup/Installation Requirements](#setup)
4. [Additional Setup/Installation Note for Windows Users](#windows)
5. [Specifications](#specs)
6. [Known Bugs](#bugs)
7. [License](#license)
8. [Contact Information](#contact)


## Description <a id="description"></a>

This is a web application for a Galactic Calculator that calculates your relative age in years if you were living on Mercury, Venus, Mars or Jupiter. It also has functionality to calculate how many years of life you could expect to have left on a given planet based on your biological sex and life habits.

## Technologies Used <a id="technologies"></a>

* _Babel/core 7.6.4_
* _Babel/plugin-transform-modules-commonjs 7.6.0_
* _Bootstrap 4.5.0_
* _clean-webpack-plugin 3.0.0_
* _CSS_
* _css-loader 3.2.0_
* _eslint 6.3.0_
* _eslint-loader 3.0.0_
* _file-loader 1.1.6_
* _HTML5_
* _html-loader 0.5.5_
* _html-webpack-plugin 3.2.0_
* _JavaScript ES6_
* _Jest 24.9.0_
* _jQuery 3.5.1_
* _Node Package Manager 6.14.9_
* _popper.js 1.16.1_
* _style-loader 1.0.0_
* _webpack 4.39.3_
* _webpack-cli 3.3.8_
* _webpack-dev-server 3.11.2_

## Setup/Installation Requirements <a id="setup"></a>

Setup requirements
* Make sure [Node.js](https://nodejs.org/en/) and [Node Package Manager (npm)](https://www.npmjs.com/) are set up on your local machine. If not, follow the installation guide [here](https://www.learnhowtoprogram.com/intermediate-javascript/getting-started-with-javascript/installing-node-js).
* This environment was created on a Mac OS. If you are on a non Mac machine, make the following change to package.json
  * change line 8 to `"start": "npm run build & webpack-dev-server --open --mode development",`

Installation
* Clone this repository to your machine `$ git clone https://github.com/shanole/galactic-age-calculator`
* In the terminal, navigate to the top level of this directory `galactic-age-calculator/`
* Recreate project environment and install required dependencies `$ npm install`
* Create production environment `$ npm run build`
* Open project in a development server on your web browser `$ npm run start`
* To lint code run command `$ npm run lint`
* To run tests with Jest run command `$ npm run test`

## Specifications <a id="specs"></a>

Please refer to `galactic-age-calculator/__tests__/test.person.js` for a comprehensive breakdown of all specs for this project. All tests were run through Jest.

```
 PASS  __tests__/test.person.js
  Person
    ??? should create a Person object with age and sex properties (4ms)
    ??? should have a setLifeExpectancy method that sets the lifeExpectancy property qual to 81 if the sex is female, and equal to 77 if the sex is male
    ??? should have a setAdjustedLifeExpectancy method that sets the lifeExpectancy property of a person to be higher or lower based on their life habits
    ??? should have a getPlanetAge method that returns the Person's age divided by 0.24 when the given parameter is Mercury
    ??? should have a getPlanetAge method that returns the Person's age divided by 0.62 when the given parameter is Venus (1ms)
    ??? should have a getPlanetAge method that returns the Person's age divided by 1.88 when the given parameter is Mars
    ??? should have a getPlanetAge method that returns the Person's age divided by 11.86 when the given parameter is Jupiter (1ms)
    ??? should have a method getTimeLeft that returns the difference between the adjusted life expectancy on a given planet and the Person's age on that planet
    ??? should have a getTimeLeft method that returns a negative number if the Person has exceeded the average life expectancy (1ms)

-----------|----------|----------|----------|----------|-------------------|
File       |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-----------|----------|----------|----------|----------|-------------------|
All files  |      100 |      100 |      100 |      100 |                   |
 person.js |      100 |      100 |      100 |      100 |                   |
-----------|----------|----------|----------|----------|-------------------|
Test Suites: 1 passed, 1 total
Tests:       9 passed, 9 total
Snapshots:   0 total
Time:        1.982s, estimated 2s
```

## Known Bugs <a id="bugs"></a>
* None known at this time. If you find one, please don't hesitate to contact me about it!

## License <a id="license"></a>
*[MIT](https://choosealicense.com/licenses/mit/)*

Copyright (c) 2021 Shannon Lee

## Contact Information <a id="contact"></a>
**_Shannon Lee [mailto](mailto:shannonleehj@gmail.com)_**