export default class Person {
  constructor(age,sex) {
    this.age = age;
    this.sex = sex;
    this.habits = [];
    if (sex === "female") {
      this.lifeExpectancy = 81;
    } else {
      this.lifeExpectancy = 77;
    }
  }

  addHabit(habit) {
    this.habits.push(habit);
  }

  getMercuryAge() {
    return this.age/0.24;
  }

  getVenusAge() {
    return this.age/0.62;
  }

  getMarsAge() {
    return this.age/1.88;
  }

  getJupiterAge() {
    return this.age/11.86;
  }
}