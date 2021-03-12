const Planet = {
  "Mercury" : 0.24,
  "Venus" : 0.62,
  "Mars" : 1.88,
  "Jupiter" : 11.86,
  "Earth" : 1
};

export default class Person {
  constructor(age,sex) {
    this.age = age;
    this.sex = sex;
    if (sex === "female") {
      this.lifeExpectancy = 81;
    } else {
      this.lifeExpectancy = 77;
    }
  }

  setAdjustedLifeExpectancy(habitsArray) {
    const LifeHabits = {
      "smoking": -10,
      "drinking": -2,
      "stress": -5,
      "exercise": 7,
      "diet": 10,
      "happy": 5
    };
    let habitsDifference = 0;
    habitsArray.forEach(function(habit) {
      habitsDifference += LifeHabits[habit];
    });
    this.lifeExpectancy += habitsDifference;
  }

  getPlanetAge(planet) {
    return this.age/Planet[planet];
  }

  getTimeLeft(planet) {
    let planetLifeExpectancy = this.lifeExpectancy/Planet[planet];
    return planetLifeExpectancy - this.getPlanetAge(planet);
  }
}