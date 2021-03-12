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

  test("should have a method getPlanetAge that returns the Person's age divided by 0.24 when the given parameter is Mercury", () => {
    expect(testPerson.getPlanetAge("mercury")).toEqual(25/.24);;
  });

  test("should have a method getPlanetAge that returns the Person's age divided by 0.62 when the given parameter is Venus", () => {
    expect(testPerson.getPlanetAge("venus")).toEqual(25/.62);
  });

  test("should have a method getPlanetAge that returns the Person's age divided by 1.88 when the given parameter is Mars", () => {
    expect(testPerson.getPlanetAge("mars")).toEqual(25/1.88);
  });

  test("should have a method getPlanetAge that returns the Person's age divided by 11.86 when the given parameter is Jupiter", () => {
    expect(testPerson.getPlanetAge("jupiter")).toEqual(25/11.86);
  });

  test("should have a lifeExpectancy property equal to 81 if the sex is female, and equal to 77 if the sex is male", () => {
    expect(testPerson.lifeExpectancy).toEqual(81);
    expect(maleTestPerson.lifeExpectancy).toEqual(77);
  })
})