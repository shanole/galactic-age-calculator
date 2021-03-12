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
  });

  test("should have a method getMercuryAge that returns the Person's age divided by 0.24", () => {
    expect(testPerson.getMercuryAge()).toEqual(25/.24);
  });

  test("should have a method getVenusAge that returns the Person's age divided by 0.62", () => {
    expect(testPerson.getVenusAge()).toEqual(25/.62);
  });

  test("should have a method getMarsAge that returns the Person's age divided by 1.88", () => {
    expect(testPerson.getMarsAge()).toEqual(25/1.88);
  });

  test("should have a method getJupiterAge that returns the Person's age divided by 1.88", () => {
    expect(testPerson.getJupiterAge()).toEqual(25/11.86);
  });

  test("should have a lifeExpectancy property equal to 81 if the sex is female, and equal to 77 if the sex is male", () => {
    expect(testPerson.lifeExpectancy).toEqual(81);
    expect(maleTestPerson.lifeExpectancy).toEqual(77);
  })
  
})