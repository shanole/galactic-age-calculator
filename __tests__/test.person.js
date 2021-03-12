import Person from './../src/js/person.js'

describe('Person', () => {
  let testPerson;
  let maleTestPerson;
  beforeEach(() => {
    testPerson = new Person(25,"female");
    maleTestPerson = new Person(32,"male");
  });

  test('should create a Person object with age and sex properties', () => {
    expect(testPerson.age).toEqual(25);
    expect(testPerson.sex).toEqual("female");
  });

  test('should have a habits attribute that is an array', () => {
    expect(testPerson.habits).toEqual([]);
  });

  test('should have a method addHabit that adds the parameter into the habits array', () => {
    testPerson.addHabit("smoking");
    expect(testPerson.habits).toEqual(["smoking"]);
  })

  test('should have a method getLifeExpectancy that returns 81 if the Person is female, and 77 if the Person is male', () => {
    expect(testPerson.getLifeExpectancy()).toEqual(81);
    expect(maleTestPerson.getLifeExpectancy()).toEqual(77);
  })

  test("should have a method getMercuryAge that returns the Person's age divided by 0.24", () => {
    expect(testPerson.getMercuryAge()).toEqual(25/.24);
  })
})