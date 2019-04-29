'use strict';
function getYearOfBirth(age) {
    if (age < 0) {
        throw new Error('Age cannot be negative!');
    }
    return 2019 - age;
}



function createGreeting(name, age) {
    try {
        let yearOfBirth = getYearOfBirth(age);
        return `Hi, my name is ${name} and my age is ${age} and I was born in ${yearOfBirth}.`;
    } catch (e) {
        console.log(e);
    }
}

const aSentence = createGreeting('Mike', 23);
console.log(aSentence);

