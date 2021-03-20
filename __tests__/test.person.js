import Person from './../src/js/person.js'

describe('Person', () => {
  let testPerson;
  let maleTestPerson;
  beforeEach(() => {
    testPerson = new Person(25,"female");
  });

  test('should create a Person object with age and sex properties', () => {
    expect(testPerson.age).toEqual(25);
    expect(testPerson.sex).toEqual("female");
  });

  test('should have a setLifeExpectancy method that sets the lifeExpectancy property qual to 81 if the sex is female, and equal to 77 if the sex is male', () => {
    let maleTestPerson = new Person(32,"male");
    testPerson.setLifeExpectancy();
    maleTestPerson.setLifeExpectancy();
    expect(testPerson.lifeExpectancy).toEqual(81);
    expect(maleTestPerson.lifeExpectancy).toEqual(77);
  })


  test('should have a setAdjustedLifeExpectancy method that sets the lifeExpectancy property of a person to be higher or lower based on their life habits', () => {
    testPerson.setAdjustedLifeExpectancy(["smoking","drinking","stress","exercise","diet","happy"]);
    expect(testPerson.lifeExpectancy).toEqual(86);
  });

  test("should have a getPlanetAge method that returns the Person's age divided by 0.24 when the given parameter is Mercury", () => {
    expect(testPerson.getPlanetAge("Mercury")).toEqual("104.17");;
  });

  test("should have a getPlanetAge method that returns the Person's age divided by 0.62 when the given parameter is Venus", () => {
    expect(testPerson.getPlanetAge("Venus")).toEqual("40.32");
  });

  test("should have a getPlanetAge method that returns the Person's age divided by 1.88 when the given parameter is Mars", () => {
    expect(testPerson.getPlanetAge("Mars")).toEqual("13.30");
  });

  test("should have a getPlanetAge method that returns the Person's age divided by 11.86 when the given parameter is Jupiter", () => {
    expect(testPerson.getPlanetAge("Jupiter")).toEqual("2.11");
  });

  test("should have a method getTimeLeft that returns the difference between the adjusted life expectancy on a given planet and the Person's age on that planet", () => {
    expect(testPerson.getTimeLeft("Mercury")).toEqual("233.33");
    expect(testPerson.getTimeLeft("Venus")).toEqual("90.33");
    expect(testPerson.getTimeLeft("Mars")).toEqual("29.79");
    expect(testPerson.getTimeLeft("Jupiter")).toEqual("4.72");
  });

  test('should have a getTimeLeft method that returns a negative number if the Person has exceeded the average life expectancy', () => {
    let oldPerson = new Person(90,"female");
    expect(oldPerson.getTimeLeft("Mercury")).toEqual("-37.50");
  });
})