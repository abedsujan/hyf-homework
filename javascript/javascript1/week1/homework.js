// AGE-IFY

const yearOfBirth = 1991 ;
let yearFuture = 2030;
let age = yearFuture - yearOfBirth;

console.log('You will be ' + age + ' years old in ' + yearFuture +'.');


// GOODBOY - OLDBOY

let dogYearOfBirth = 2017;
let dogYearFuture = 2027;
let dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = true;
let ageType;

if (shouldShowResultInDogYears){
    dogYear *= 7;
    ageType = 'dog';
} 
else {
    ageType = 'human';
}

console.log('Your dog will be ' + dogYear +' ' + ageType + ' years old in ' + dogYearFuture + '.');

