'use strict';
function createGreeting(name, age) {
  let yearOfBirth = 2019 - age;
  return `Hi, my name is ${name} and my age is ${age} and I was born in ${yearOfBirth}.`;
}

const aSentence = createGreeting('Mike', 23);
console.log(aSentence);


