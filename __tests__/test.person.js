import Person from './../src/js/person.js'

describe('Person', () => {
  let testPerson;
  beforeEach(() => {
    testPerson = new Person(25,"female")
  });

  test('should create a Person object with age and sex properties', () => {
    expect(testPerson.age).toEqual(25);
    expect(testPerson.sex).toEqual("female");
  })

  test('should have a habits attribute that is an array', () => {
    expect(testPerson.habits).toEqual([]);
  })
})