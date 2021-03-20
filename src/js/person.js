export default class Person {
  constructor(age,sex) {
    this.age = age;
    this.sex = sex;
  }

  setLifeExpectancy() {
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
    const Planet = {
      "Mercury" : 0.24,
      "Venus" : 0.62,
      "Mars" : 1.88,
      "Jupiter" : 11.86,
      "Earth" : 1
    };
    return (this.age/Planet[planet]).toFixed(2);
  }

  getTimeLeft(planet) {
    const Planet = {
      "Mercury" : 0.24,
      "Venus" : 0.62,
      "Mars" : 1.88,
      "Jupiter" : 11.86,
      "Earth" : 1
    };
    let planetLifeExpectancy = this.lifeExpectancy/Planet[planet];
    let timeLeft = planetLifeExpectancy - this.getPlanetAge(planet);
    return timeLeft.toFixed(2);
  }
}