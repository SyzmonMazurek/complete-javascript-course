/*
let country = "Poland";
let continent = "Europe";
let population = 38;

console.log(country);
console.log(continent);
console.log(population);


let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);


const country = "Poland";
const continent = "Europe";
let population = 38;
const isIsland = false;
language = "Polish";
*/

/*
const country = "Poland";
const continent = "Europe";
let population = 38;
const isIsland = false;
language = "Polish";

console.log(population / 2);
popilation++;
let finlandPopulation = 6
console.log(population > finlandPopulation);
const averagePopulation = 33
console.log(population < averagePopulation);

const description = 
country +
" is in " + 
continent +
", and its " +
population +
" milion people speak " +
language;

console.log(description);
*/

/* 1st assesment
const massMark = 78;
const heightMark = 1.69;
const massJohn = 95;
const heightJohn = 1.88;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

console.log("BMIMark ", BMIMark);
console.log("BMIJohn ", BMIJohn);

let markHigherBMI = (BMIMark > BMIJohn);

console.log(markHigherBMI);

*/
/*
const description = 
`${country} is in ${continent}, and its ${population} milion people speak ${language}`;
*/


const country = "Poland";
const continent = "Europe";
let population = 38;
const isIsland = false;
language = "Polish";

if(population > 33) {
    console.log(`${country}'s population is ${population - 33} million above average`);
} else {
    console.log(`${country}"'"s population is ${33 - population} million below average`);
}

