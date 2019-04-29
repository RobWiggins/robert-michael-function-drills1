'use strict';
function getYearOfBirth(age) {
    if (age < 0) {
        throw new Error('Age cannot be negative!');
    }
    return 2019 - age;
}



function createGreeting(name, age) {
  if (!name || !age) {
    throw new Error ('Arguments not valid!');
  }
    try {
        let yearOfBirth = getYearOfBirth(age);
        return `Hi, my name is ${name} and my age is ${age} and I was born in ${yearOfBirth}.`;
    } catch (e) {
        console.log(e.message);
    }
}

const aSentence = createGreeting('Mike');
console.log(aSentence);

