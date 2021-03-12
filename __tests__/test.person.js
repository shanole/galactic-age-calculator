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

  test("should have a avgLifeExpectancy property equal to 81 if the sex is female, and equal to 77 if the sex is male", () => {
    expect(testPerson.avgLifeExpectancy).toEqual(81);
    expect(maleTestPerson.avgLifeExpectancy).toEqual(77);
  });

  test("should have a method getTimeLeft that returns the difference between the average life expectancy on a given planet and the Person's age on that planet", () => {
    expect(testPerson.getTimeLeft("mercury")).toEqual((81/0.24) - (25/0.24));
    expect(testPerson.getTimeLeft("venus")).toEqual((81/0.62) - (25/0.62));
    expect(testPerson.getTimeLeft("mars")).toEqual((81/1.88) - (25/1.88));
    expect(testPerson.getTimeLeft("jupiter")).toEqual((81/11.86) - (25/11.86));
  });

  test('should have a getTimeLeft method that returns a negative number if the Person has exceeded the average life expectancy', () => {
    let oldPerson = new Person(90,"female");
    expect(oldPerson.getTimeLeft("mercury")).toEqual(-37.5);
  });

  test('should have a habits property that is an array', () => {
    expect(testPerson.habits).toEqual([]);
  })

  test('should have a addHabits method that adds the parameter to the habits array', () => {
    testPerson.addHabits("smoking");
    expect(testPerson.habits).toEqual(["smoking"]);
  })
})