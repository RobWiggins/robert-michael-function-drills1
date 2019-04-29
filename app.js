'use strict';
function getYearOfBirth(age) {
    return 2019 - age;
}

function createGreeting(name, age) {
  return `Hi, my name is ${name} and my age is ${age} and I was born in ${getYearOfBirth(age)}.`;
}

const aSentence = createGreeting('Mike', 23);
console.log(aSentence);

