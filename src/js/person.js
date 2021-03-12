export default class Person {
  constructor(age,sex) {
    this.age = age;
    this.sex = sex;
    if (sex === "female") {
      this.avgLifeExpectancy = 81;
    } else {
      this.avgLifeExpectancy = 77;
    }
  }

  getPlanetAge(planet) {
    const planetDivider = {
      "mercury" : 0.24,
      "venus" : 0.62,
      "mars" : 1.88,
      "jupiter" : 11.86
    }
    return this.age/planetDivider[planet];
  }

  getTimeLeft(planet) {
    const planetDivider = {
      "mercury" : 0.24,
      "venus" : 0.62,
      "mars" : 1.88,
      "jupiter" : 11.86
    }
    let planetLifeExpectancy = this.avgLifeExpectancy/planetDivider[planet];
    return planetLifeExpectancy - this.getPlanetAge(planet);
  }
}