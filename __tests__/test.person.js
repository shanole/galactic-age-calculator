import { TestScheduler } from 'jest'
import Person from './../src/js/person.js'

describe('Person', () => {
  test('should create a Person object with age and sex properties', () => {
    let testPerson = new Person(25,"female");
    expect(testPerson.age).toEqual(25);
    expect(testPerson.sex).toEqual("female");
  })
})