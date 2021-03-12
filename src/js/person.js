const Planet = {
  "mercury" : 0.24,
  "venus" : 0.62,
  "mars" : 1.88,
  "jupiter" : 11.86
}

export default class Person {
  constructor(age,sex) {
    this.age = age;
    this.sex = sex;
    this.habits = [];
    if (sex === "female") {
      this.avgLifeExpectancy = 81;
    } else {
      this.avgLifeExpectancy = 77;
    }
  }

  addHabits(habit) {
    this.habits.push(habit);
  }

  getPlanetAge(planet) {
    return this.age/Planet[planet];
  }

  getTimeLeft(planet) {
    let planetLifeExpectancy = this.avgLifeExpectancy/Planet[planet];
    return planetLifeExpectancy - this.getPlanetAge(planet);
  }
}