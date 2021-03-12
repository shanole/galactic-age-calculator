# Galactic Age Calculator

#### Epicodus Code Review #5: Test-Driven Development and Webpack

#### By Shannon Lee

#### _Table of Contents_

1. [Preview](#preview)
2. [Technologies Used](#technologies)
3. [Description](#description)
4. [Setup/Installation Requirements](#setup)
5. [Additional Setup/Installation Note for Windows Users](#windows)
6. [Specifications](#specs)
7. [Known Bugs](#bugs)
8. [License](#license)
9. [Contact Information](#contact)

## Preview <a id="preview"></a>

* _Direct your browser to a [live version](shanole.github.io/project/index.html) on GitHub Pages._

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

## Description <a id="description"></a>

This is a web application for a Galactic Calculator that calculates your relative age in years if you were living on Mercury, Venus, Mars or Jupiter. It also has functionality to calculate how many years of life you could expect to have left on a given planet based on your gender and life habits.

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

<!-- ## Specifications <a id="specs"></a>

Test specs for the Person object:
| Behavior | Input | Output |
|:---:|:---:|:---:|
| should create a Person object with age and sex properties | `testPerson = new Person(25,"female")`| `expect(testPerson.age).toEqual(25); expect(testPerson.sex).toEqual("female")`;|
| should have a lifeExpectancy property equal to 81 if the sex is female, and equal to 77 if the sex is male | `let maleTestPerson = new Person(32,"male")` | `expect(testPerson.lifeExpectancy).toEqual(81); expect(maleTestPerson.lifeExpectancy).toEqual(77);` |
| should have a setAdjustedLifeExpectancy method that sets the lifeExpectancy property of a person to be higher or lower based on their life habits | `testPerson.setAdjustedLifeExpectancy(["smoking","drinking","stress","exercise","diet","happy"]);` | `expect(testPerson.lifeExpectancy).toEqual(86);` | -->


## Known Bugs <a id="bugs"></a>
* _Any known issues_
* _should go here_

## License <a id="license"></a>
*[MIT](https://choosealicense.com/licenses/mit/)*

Copyright (c) 2021 Shannon Lee

## Contact Information <a id="contact"></a>
**_Shannon Lee [mailto](mailto:shannonleehj@gmail.com)_**