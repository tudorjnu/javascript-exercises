const findTheOldest = function(people) {
  let oldestPerson = null;
  let oldestAge = 0;

  for (const person of people) {
    let age;

    if ("yearOfDeath" in person) {
      age = person.yearOfDeath - person.yearOfBirth;
    } else {
      age = new Date().getFullYear() - person.yearOfBirth;
    }

    if (oldestPerson === null) {
      oldestPerson = person;
      oldestAge = age;
      continue;
    } else if (oldestAge > age) {
      continue;
    }
    oldestPerson = person;
    oldestAge = age;
  }
  return oldestPerson;
};


// Do not edit below this line
module.exports = findTheOldest;
