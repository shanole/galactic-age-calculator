export default class Person {
  constructor(age,sex) {
    this.age = age;
    this.sex = sex;
    this.habits = [];
  }

  addHabit(habit) {
    this.habits.push(habit);
  }
}