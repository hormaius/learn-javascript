"use strict";
/*
let message;
message = `Hello`; // adds the Hello string to the message let variable

// to call for the variable, use console or alert
console.log(message); // = Hello

let stalker = "Georgiy",
  age = 33,
  faction = "Monolith"; // not recommended, use single variable declaration for better readability

console.log(stalker, age, faction, "<<<< STALKER ONE");

let stalkerTwo = "Strelok";
let ageTwo = 37;
let factionTwo = "Freedom";

console.log(stalkerTwo, ageTwo, factionTwo, "<<<< STALKER TWO");

// we can store variables inside other variables - take the box example
let currentFaction = "military";
let playerCurrentFaction = currentFaction;

console.log(`Player's current faction is ${playerCurrentFaction}.`);
*/

// VARIABLES
// Constant
/*
const zoneName = "Chernobyl Exclusion Zone";

zoneName = "Pripyat Exclusion Zone";
*/
// code above won't work, constants CAN NOT be reassigned, use let instead

/*
// JS.info - Variables Assignments
// Assignment 1 - Working with variables
let admin;
// let userName = "John";
// admin = userName;

console.log(`Admin's name is ${admin}.`);

// Assignment 2 - Giving the right name
// const mainPlanet = "Earth";
// let currentUser = userName;

console.log(
  `The main planet is ${mainPlanet}.`,
  `The current user is ${currentUser}.`
);
*/

// Assignment 3 - Uppercase const?
// Check notes
/* ************************************************************* */
/*
// MDN - Basic math in JS, numbers and operators
// Assignment 1
const ammoCount = 30;
const ammoDiameter = 5.56;

console.log(`There's ${ammoCount} ${ammoDiameter} bullets left in the mag.`); // checks how many bullets of what ammo type left

console.log(`Type of ammoCount is ${typeof ammoCount}.`); // checks type of ammoCount

console.log(`Type of ammoDiameter is ${typeof ammoDiameter}.`); // checks type of ammoDiameter
*/
/*
// Useful Number methods
// toFixed() - lets you round the number to a fixed number of decimals, stated in the parenthesis
const bulletDamage = 19.99682482455018;

console.log(`Bullet damage is ${bulletDamage}, unrounded.`);

const bulletDamageRounded = bulletDamage.toFixed(2);

console.log(`Final bullet damage is ${bulletDamageRounded}, rounded.`);
*/
/*
// Converting to number data types
let transactionBuyAmount = "35"; // imagine this as the player buying x amount of bullets from the in-game shop, submitted in a form
transactionBuyAmount += 5; // and this as the "bonus" bullets they receive from the vendor

console.log(`You received ${transactionBuyAmount} bullets!`); // this will output 355 bullets, adding "5" to the transactionBuyAmount amount which is in a STRING!

transactionBuyAmount = Number(transactionBuyAmount) + 5;
console.log(transactionBuyAmount);
*/
///////////////////////////////////////////////////////////
// BACK TO ODIN PROJECT ///////////////////////////////////
///////////////////////////////////////////////////////////
// Fundamentals Part 1 - JavaScript, Assignment

/*
console.log(23 + 77); // 100
console.log((4 + 6 + 9) / 77);

let numOne = 10;
console.log(9 * numOne); // 90

let numTwo = 7 * numOne;
console.log(numTwo);

const max = 57;
let actual = max - 13;
let percentage = actual / max;
console.log(percentage);
*/
/*
// Fundamentals Part 2 - JavaScript
const welcomeMessage = "welcome to the Zone, Stalker";
console.log(
  `You can hear a croaky voice whispering "${welcomeMessage}" through the radio.`
);
*/
/*
// MDN - String concatenation using +
console.log("A loud speaker plays an audio recording: " + welcomeMessage + ".");
*/
/*
// W3Schools - String methods
console.log(`Length of welcomeMessage is ${welcomeMessage.length}.`); // shows character length of welcomeMessage

let cryptMsg = "eth2btc666lth222";
let msgRcv = cryptMsg.slice(4, 10); // "slices" the btc666 part of the string, check notes 2.1.2 for more
console.log(msgRcv);
*/
/*
// JS.info - Comparisons
let knifeDmg = 50;
let playerHealth = 100;

console.log(`playerHealth(50) > knifeDmg(100)= ${playerHealth > knifeDmg}`);
console.log(`playerHealth(50) == knifeDmg(100) = ${playerHealth == knifeDmg}`);
console.log(`playerHealth(50) != knifeDmg(100) = ${playerHealth != knifeDmg}`);

let lowestHp = 1; // 0 = false, 1 = true in type comparison

console.log(`Comparisons (lowestHP = 1): false? == ${lowestHp == false}`);
console.log(`Comparisons (lowestHP = 1): false? != ${lowestHp != false}`);
console.log(`Comparisons (lowestHP = 1): true? == ${lowestHp == true}`);
console.log(`Comparisons (lowestHP = 1): true? === ${lowestHp === true}`);

console.log(`Is ( null == undefined? ): ${null == undefined}`);
console.log(`Is ( null === undefined? ): ${null === undefined}`);
// This above is strictly for this case, null and undefined are "equal" to each other in the sense of ==, but not any other value
// For MATH and other comparisons ( < > <= >=), null = 0, undefined = NaN
*/
/*
let dummy;
if (dummy == null) {
  console.log(`dummy is equal in value(==) to null`);
} else {
  console.log(`dummy is NOT equal to null in value`);
} // if rule applies, undefined == null is TRUE

if (dummy === null) {
  console.log(`dummy is equal in value and type(===) to null`);
} else {
  console.log(`dummy is NOT equal to null in value AND type`);
} // the else rule applies, undefined === null is NOT true
*/
/*
// 3.1.2 CONDITIONALS
// if statement
let hour = 18;
*/
/*
if (hour <= 18) {
  greeting = "Good day!";
  console.log(greeting);
} // prints out the greeting var, "Good day!" string in console
*/
/*
// else statement
if (hour <= 18) {
  greeting = "Good day!";
  console.log(greeting);
} else {
  greeting = "Good evening!";
  console.log(greeting);
}
*/
/*
// else if statement
let playerLevel = 20;
let isPlayerInvited = false;
if (playerLevel >= 20) {
  levelRequirement = "You are leveled enough for this event.";
} else if (isPlayerInvited) {
  levelRequirement =
    "You are not leveled enough, however you have been invited by a player with sufficient level for this event.";
} else {
  levelRequirement = "You can not participate in this event yet.";
}

console.log(levelRequirement);

let playerFaction = "Duty";
let zoneAllowedFaction = "Duty";

if (playerFaction === "Duty" && zoneAllowedFaction === "Duty") {
  console.log("Player is allowed into the Duty headquarters.");
} else {
  console.log("Player will be shot!");
}

if ((playerFaction === "Monolith", "Military")) {
  console.log("Player is NOT allowed into the Zone.");
}

const value1 = "";
const value2 = "";
const value3 = "SuperCoder - Value 3 is applied, other strings are empty";

result = value1 || value2 || value3;
console.log(result);

const realValue = 50;
const fakeValue = 60;

console.log(
  `Is realValue NOT equal to fakeValue? = ${
    fakeValue == !realValue
  } if false, it is equal`
);
*/

/*
alert(Boolean("non-empty string")); // true
alert(Boolean(null)); // false
*/

// code above is same as the double-NOT operator below

/*
alert(!!"non-empty string"); // true
alert(!!null); // false
*/

/*
alert(null || 2 || undefined); // result is 2 
*/

// alert(alert(1) || 2 || alert(3));

/*
console.log(null || (2 && 3) || 4); // 3 because both values are true so the last value is returned
*/
/*
// Check the range between
let secondAge = 4;
if (secondAge >= 14 && secondAge <= 90) {
  console.log("Age is between 14 and 90!");
} else {
  console.log("Age is NOT between 14 and 90!");
} // when age is 14, it's true
*/
/*
// Check the range outside
if (!(secondAge >= 14 && secondAge <= 90)) {
  console.log("it works");
} else {
  console.log("it works as well");
} // when age is 4, it's
*/
/*
if (-1 || 0) alert("first");
if (-1 && 0) alert("second");
if (null || (-1 && 1)) alert("third");
*/
/*
let userName = prompt("Please enter your username:");

if (userName === "admin") {
  let userPassword = prompt("Please enter your password:");
  if (userPassword === "TheMaster") {
    alert("Welcome!");
  } else if (userPassword === "" || userPassword === null) {
    alert("Canceled");
  } else {
    alert("Wrong password!");
  }
} else if (userName === "" || userName === null) {
  alert("Canceled");
} else {
  alert("I don't know you");
} */

// Code above is login system done in if...else

/* let shoppingDone = true;
let pocketMoney = 0;

if ((shoppingDone)) {
  pocketMoney = 100;
  console.log(`Pocket money is $${pocketMoney}`);
} else {
  pocketMoney = 50;
  console.log(`Pocket money is $${pocketMoney}`);
}
 */

// THE CONDITIONAL TERNARY OPERATOR
/* const age = 23;
// age >= 18
//   ? console.log("You can drink wine. (age > 18)")
//   : console.log("You can't drink wine yet! (age < 18)");

const drink =
  age >= 18
    ? "You can drink wine. (age > 18)"
    : "You can't drink wine yet! (age < 18)";
console.log(drink);

let drinkTwo;
if (age >= 18) {
  drinkTwo = "wine";
} else {
  drinkTwo = "water";
}
console.log(`I'll have ${drinkTwo} please!`); */

/* // THE SWITCH STATEMENT
let playerFaction;
let playerRank;
let playerName;
let playerGender;

// remember to declare variables before using them

playerFaction = "USEC";
playerGender = "brother";
playerRank = "corporal";
playerName = "John"; */

// switch statement is run as " playerFaction === USEC", it uses a strict equality operator
/* switch (playerFaction) {
  case "USEC":
    console.log(`Welcome to the base, ${playerRank} ${playerName}.`);
    break;
  case "BEAR":
    console.log(`Privyet, ${playerRank} ${playerName}.`);
    break;
  case "NOIR":
    console.log(`Proceed further, ${playerGender} ${playerName}.`);
    break;
  case "SCAV":
    console.log(`You're ${playerName}? Move on, cyka.`);
    break;
  default:
    console.log("You're not allowed to go inside yet."); // works in case none of the options above can be run
} */

/* if (playerFaction === "USEC") {
  console.log(`Welcome to the base, ${playerRank} ${playerName}.`);
} else if (playerFaction === "BEAR") {
  console.log("Reshala's waiting for you, head to the second floor.");
} else if (playerFaction === "NOIR" || playerFaction === "SCAV") {
  console.log("PMC's first, hold on.");
} else {
  console.log("You're not allowed inside yet.");
} */

// Coding challenge #4
/* let tip;
let bill;
let value;

bill = 275;
tip = bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill;
value = bill + tip;

console.log(
  `The first bill is ${bill}, the tip is ${tip} and the total value is ${value}.`
);

bill = 40;
tip = bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill;
value = bill + tip;

console.log(
  `The second bill is ${bill}, the tip is ${tip} and the total value is ${value}.`
);

bill = 430;
tip = bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill;
value = bill + tip;

console.log(
  `The third bill is ${bill}, the tip is ${tip} and the total value is ${value}.`
); */
// Challenge completed
/* let hasDriversLicense = true;
const passTest = true;

if (hasDriversLicense) {
  console.log(`Congratulations, you've passed the test! = ${passTest}`);
} */

// PART 2 Fundamentals Jonas
// Functions

// declaring a function
/* function logger() { // not all functions need a parameter or return value to run
  console.log("My name is Marks");
}

// to call, invoke or run the function, use its name
logger();
 */
/* function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
} */

/* const appleJuice = fruitProcessor(5, 0); // here we capture the value to a variable called appleJuice
const orangeJuice = fruitProcessor(0, 5);
const mixedJuice = fruitProcessor(2, 2);
console.log(fruitProcessor(5, 2)); // we did the same as above, but we did NOT capture the value into any variable
console.log(orangeJuice); */

/* function emptyBarrel() {
  console.log(`this is an empty barrel`);
}
const barrelCall = emptyBarrel(5);
console.log(barrelCall); // undefined, the function does not have a value */

// Function declarations vs expressions
/* function calcAgeOne(birthYear) {
  // this is a function declaration
  const age = 2022 - birthYear; // subtracts the birthYear parameter from 2022
  return age; // returns the age
}
const ageOne = calcAgeOne(1996);

const calcAgeTwo = function (birthYearTwo) {
  // this is a function expression
  return 2022 - birthYearTwo;
};
const ageTwo = calcAgeTwo(1996);

console.log(
  `function declaration = ${ageOne}, function expression = ${ageTwo}`
); */
/* Function declarations can be called before the function being declared but NOT the same for expressions.
Function expressions must have the function declared before invoking the function. */

// Arrow function
/* const calcAge = (birthYear) => 2022 - birthYear; // arrow function, useful for one-liners
const playerAge = calcAge(1996); // 26 as of 2022
console.log(playerAge); */

/* const retirementLeft = (birthYear, firstName) => {
  // if we need more parameters, we wrap them in parentheses
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
};
console.log(retirementLeft(1996, "Marks"));
console.log(retirementLeft(1982, "Reshala")); */

// Functions calling other functions
/* function fruitCutter(fruit) {
  // this function multiplies the (apples, oranges) parameters in the fruitProcessor function by 4, then we save them in their respective "applePieces" and "orangePieces" variables to store them
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = fruitCutter(apples);
  const orangePieces = fruitCutter(oranges); // here they are stored in their respective variables

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3)); // and we use the fruitProcessor function to call this function, thereby invoking two functions here */

// Reviewing functions
/* const ageCalculator = function (birthYearSecond) {
  return 2022 - birthYearSecond;
};

const retirementLeft = function (birthYear, firstName) {
  // NOTE the reason why we store the function in variables is because functions can't be called in reference to another functions without variables!!
  const age = ageCalculator(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    return `${firstName} has ${retirement} years left for their retirement.`;
  } else {
    return -1;
  }
   const checker = retirement > 0 ? return retirement : return `Candidate already passed their retirement date!`; // NOTE this is invalid! ternary operator only uses expressions and NOT statements
  // return `${firstName} retires in ${retirement} years.`;
};

console.log(retirementLeft(1996, "Marks")); */

// Code assignments - Fundamentals Part 2
// ASSIGNMENT: Functions
/* function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}
const france = describeCountry("France", 67, "Paris");
console.log(france);
const germany = describeCountry("Germany", 83, "Berlin");
console.log(germany);
const italy = describeCountry("Italy", 59, "Rome");
console.log(italy); */

// ASSIGNMENT: Function declarations vs expressions
/* function percentageOfWorld(population) {
  return (population / 7900) * 100;
}
const france = percentageOfWorldSecond(69);
console.log(`France makes up %${france} of world population!`);
const germany = percentageOfWorldSecond(83);
console.log(`Germany makes up %${germany} of world population!`);
const italy = percentageOfWorldSecond(59);
console.log(`Italy makes up %${italy} of world population!`);
 */
/* const percentageOfWorldSecond = function (population) {
  return (population / 7900) * 100;
};

const france = percentageOfWorldSecond(69);
console.log(`France makes up %${france} of world population!`);
const germany = percentageOfWorldSecond(83);
console.log(`Germany makes up %${germany} of world population!`);
const italy = percentageOfWorldSecond(59);
console.log(`Italy makes up %${italy} of world population!`);
 */

/* const percentageOfWorldThird = (population) => (population / 7900) * 100; // using an arrow function to do the same as above
const percentage = percentageOfWorldThird(population);
console.log(`France makes up %${percentageFrance} of world's population.`);

// ASSIGNMENT: Functions calling other functions
const describePopulation = function (country, populationTwo) {
  const percentage = percentageOfWorldThird(populationTwo);
  const description = `${country} has ${populationTwo} million people, which is about ${percentage}% of the world.`;
  console.log(description);
};

describePopulation("France", 69);
describePopulation("Germany", 83);
describePopulation("Italy", 59); */

// My examples
// Annual tax calculation
/* const taxPercentage = (userIncomeAnnual) => (userIncomeAnnual / 100) * 20;

const taxCalculator = function (userName, userJob, userIncomeAnnual) {
  const taxPercent = taxPercentage(userIncomeAnnual);
  const taxDesc = `${userName}, employed as a/an ${userJob} with ${userIncomeAnnual} of annual income, is to pay ${taxPercent} in taxes.`;
  console.log(taxDesc);
};

taxCalculator("Marks", "Frontend Engineer", 98000); */

// Profit calculation
/* const profitCalculator = (totalIncome, totalCosts) => totalIncome - totalCosts;

const fbaProfitTool = function (
  productName,
  productType,
  totalIncome,
  totalCosts
) {
  const displayProfit = profitCalculator(totalIncome, totalCosts);
  const displayProfitFinal = `${productName}, typed ${productType} has made ${displayProfit} of income after ${totalCosts} in costs.`;
  console.log(displayProfitFinal);
};

fbaProfitTool("MVRK Skull Decor", "Halloween Home Decor", 70699, 2973); */

// Tax calculation #2 for practice
/* const taxCalculator = (totalIncome) => (totalIncome / 100) * 20;
const revenueCalculator = function (userName, userJob, dateYear, totalIncome) {
  const taxCalculation = taxCalculator(totalIncome);
  const revenueDescription = `${userName} is titled as a/an ${userJob}, their total income as of ${dateYear} is $${totalIncome}, their total tax due is $${taxCalculation}.`;
  console.log(revenueDescription);
};

revenueCalculator("Marks Turu", "frontend developer", 2022, 48000); */

// CHALLENGE: Fundamentals Part 2, coding challenge #1
