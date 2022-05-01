function calcAge(person){
    if (person.yearOfDeath){
        return person.yearOfDeath - person.yearOfBirth;
    } else {
        return new Date().getFullYear() - person.yearOfBirth;
    }
}


const findTheOldest = function(people) {
    return people.sort((firstPerson, secondPerson) => calcAge(firstPerson) < calcAge(secondPerson) ? 1 : -1)[0];
};

// Do not edit below this line
module.exports = findTheOldest;
