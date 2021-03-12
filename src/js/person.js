export default class Person {
  constructor(age,sex) {
    this.age = age;
    this.sex = sex;
    this.habits = [];
  }

  addHabit(habit) {
    this.habits.push(habit);
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