const findTheOldest = function(people) {

    // return people.reduce((oldest, person) => person.yearOfBirth < oldest.yearOfBirth ? oldest: person);
    let currentYear = new Date().getFullYear()

    let oldest = people.reduce((oldest, person) => {
        if (!person.yearOfDeath){
            person.age = currentYear - person.yearOfBirth;
        } else {
            person.age = person.yearOfDeath - person.yearOfBirth;
        }
        return person.age < oldest.age ? oldest : person;
    }, {age: 0});

    return oldest;
    
};

// Do not edit below this line
module.exports = findTheOldest;
