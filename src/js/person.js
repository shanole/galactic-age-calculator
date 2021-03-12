export default class Person {
  constructor(age,sex) {
    this.age = age;
    this.sex = sex;
    this.habits = [];
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

  getLifeExpectancy() {
    let lifeExpectancy;
    if (this.sex === "female") {
      lifeExpectancy = 81;
    } else {
      lifeExpectancy = 77;
    }
  return lifeExpectancy;
  }
}