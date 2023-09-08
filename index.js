"use strict";
// Problem 2:
let personName = "Eric";
let message = `Hello ${personName}, would you like to learn some Python today?`;
console.log(message);
// Problem No 3:
let person = "John Doe";
// Convert to lowercase
let lowercaseName = personName.toLowerCase();
// Convert to uppercase
let uppercaseName = personName.toUpperCase();
// Convert to titlecase
function toTitleCase(input) {
    return input.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
let titlecaseName = toTitleCase(personName);
// Print the names
console.log("Lowercase Name:", lowercaseName);
console.log("Uppercase Name:", uppercaseName);
console.log("Titlecase Name:", titlecaseName);
//Problem No 4:
const quote = 'A person who never made a mistake never tried anything new.';
const author = 'Albert Einstein';
console.log(`${author} once said, "${quote}"`);
//Problem No 5:
const famous_person = 'Albert Einstein';
const quot = 'A person who never made a mistake never tried anything new.';
const mesage = `${famous_person} once said, "${quote}"`;
console.log(mesage);
//Problem No 6:
const nameWithWhitespace = '\t\n   John Doe   \t\n';
console.log('Name with whitespace:');
console.log(nameWithWhitespace);
// Removing leading and trailing whitespace using the trim() method
const nameStrippedWhitespace = nameWithWhitespace.trim();
console.log('\nName after stripping whitespace:');
console.log(nameStrippedWhitespace);
//Problem No 7:
// Addition
const additionResult = 5 + 3;
console.log(`Addition Result: 5 + 3 = ${additionResult}`);
// Subtraction
const subtractionResult = 15 - 7;
console.log(`Subtraction Result: 15 - 7 = ${subtractionResult}`);
// Multiplication
const multiplicationResult = 4 * 2;
console.log(`Multiplication Result: 4 * 2 = ${multiplicationResult}`);
// Division
const divisionResult = 16 / 2;
console.log(`Division Result: 16 / 2 = ${divisionResult}`);
//Problem No 8:
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
//Problem No 9:
const favoriteNumber = 7;
const msg = `My favorite number is ${favoriteNumber}.`;
console.log(msg);
//Problem No 10:
//Program 1: Favorite Number
// My favorite number is 7
const favriteNumber = 7; // Store the favorite number in a variable
const mgs = `My favorite number is ${favoriteNumber}.`; // Create a message using the favorite number
console.log(mgs); // Print the message to reveal the favorite number
//Program 2: Arithmetic Operations
// Perform basic arithmetic operations and print the results
console.log(5 + 3); // Addition: 5 + 3
console.log(10 - 2); // Subtraction: 10 - 2
console.log(4 * 2); // Multiplication: 4 * 2
console.log(16 / 2); // Division: 16 / 2
//Problem No 11:
let names = ["Ali", "Bilal", "Chand", "Dilawar"];
// Print each person's name
console.log(names[0]); // Print the first person's name
console.log(names[1]); // Print the second person's name
console.log(names[2]); // Print the third person's name
console.log(names[3]); // Print the fourth person's name
//Problem No 12:
// Define an array of people
const people = ["Rehan", "Babar", "Chaudary", "Dawood", "Shafiq"];
// Define the message to be personalized
let messge = "Hello, ";
// Loop through the array and print personalized messages
for (let person of people) {
    console.log(messge + person + "!");
}
//Problem No 13:
// Define an array of favorite modes of transportation
const transportation = ["Honda motorcycle", "Tesla car", "Ducati motorcycle", "Jeep SUV", "Bicycle"];
// Loop through the array and print statements about each item
for (const mode of transportation) {
    console.log(`I would like to own a ${mode}.`);
}
//Problem No 14:
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// Define an array of people to invite to dinner
const guestList = ["Yousaf", "Imran Khan", "Farhan"];
// Loop through the array and print dinner invitations
for (const guest of guestList) {
    console.log(`Dear ${guest}, I would like to invite you to dinner. Please join me for a delightful evening.`);
}
//Problem No 15:
// Define the original guest list
const gustList = ["Afridi", "Abdul Razzaq", "Riaz Ahmed"];
// Print a message about the guest who can't make it
const guestWhoCantMakeIt = "Shafiq Ahmed";
console.log(`${guestWhoCantMakeIt} can't make it to the dinner.`);
// Replace the guest who can't make it with a new guest
const newGuest = "Zubair Amjad";
const indexOfCancelledGuest = guestList.indexOf(guestWhoCantMakeIt);
if (indexOfCancelledGuest !== -1) {
    gustList[indexOfCancelledGuest] = newGuest;
}
// Print a second set of invitation messages
for (const gust of guestList) {
    console.log(`Dear ${gust}, I would like to invite you to dinner. Please join me for a delightful evening.`);
}
//Problem No 16:
// Define the original guest list
const List = ["Albert Einstein", "Marie Curie", "Jane Austen"];
// Print a message about the guest who can't make it
const gustWhoCantMakeIt = "Leonardo da Vinci";
console.log(`${guestWhoCantMakeIt} can't make it to the dinner.`);
// Replace the guest who can't make it with a new guest
const newGest = "Isaac Newton";
const indxOfCancelledGuest = guestList.indexOf(guestWhoCantMakeIt);
if (indexOfCancelledGuest !== -1) {
    guestList[indexOfCancelledGuest] = newGuest;
}
// Print a message about finding a bigger dinner table
console.log("I found a bigger dinner table!");
// Add one new guest to the beginning of the array
const newGuestAtBeginning = "Galileo Galilei";
guestList.unshift(newGuestAtBeginning);
// Add one new guest to the middle of the array
const newGuestInMiddle = "Charles Darwin";
const middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, newGuestInMiddle);
// Use append() (push() in JavaScript) to add one new guest to the end of your list
const newGuestAtEnd = "Nikola Tesla";
guestList.push(newGuestAtEnd);
// Print a new set of invitation messages
for (const guest of guestList) {
    console.log(`Dear ${guest}, I would like to invite you to dinner. Please join me for a delightful evening.`);
}
//Problem No 17:
// Define the original guest list
let A = [
    "Salman",
    "Faris",
    "Rehan",
    "Ali",
    "Jimmy",
    "Tanzeel"
];
// Print a message about the guest who can't make it
const WhoCantMakeIt = "Leonardo da Vinci";
console.log(`${guestWhoCantMakeIt} can't make it to the dinner.`);
// Replace the guest who can't make it with a new guest
const B = "Isaac Newton";
const C = guestList.indexOf(guestWhoCantMakeIt);
if (indexOfCancelledGuest !== -1) {
    guestList[indexOfCancelledGuest] = newGuest;
}
// Print a message about finding a bigger dinner table
console.log("I found a bigger dinner table!");
// Add one new guest to the beginning of the array
const AtBeginning = "Galileo Galilei";
guestList.unshift(newGuestAtBeginning);
// Add one new guest to the middle of the array
const D = "Charles Darwin";
const b = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, newGuestInMiddle);
// Use push() to add one new guest to the end of your list
const E = "Nikola Tesla";
guestList.push(newGuestAtEnd);
// Print a message saying you can invite only two people for dinner
console.log("I can invite only two people for dinner.");
// Remove guests until only two names remain in the list
while (guestList.length > 2) {
    const removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}
// Print a message to the two remaining people
for (const guest of guestList) {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
}
// Remove the last two names from the list
guestList.length = 0;
// Print the empty list
console.log("Empty guest list:", guestList);
//Problem No 18:
// Define an array of places to visit
const placesToVisit = [
    "Tokyo, Japan",
    "Paris, France",
    "Machu Picchu, Peru",
    "Santorini, Greece",
    "Banff, Canada"
];
// Print the array in its original order
console.log("Original Order:", placesToVisit);
// Print the array in alphabetical order without modifying the actual list
const sortedAlphabetically = [...placesToVisit].sort();
console.log("Alphabetical Order:", sortedAlphabetically);
// Confirm that the original array is still in its original order
console.log("Original Order (after alphabetical sort):", placesToVisit);
// Print the array in reverse alphabetical order without changing the order of the original list
const reverseAlphabetical = [...placesToVisit].sort().reverse();
console.log("Reverse Alphabetical Order:", reverseAlphabetical);
// Confirm that the original array is still in its original order
console.log("Original Order (after reverse alphabetical sort):", placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);
// Reverse the order of the list again to get back to the original order
placesToVisit.reverse();
console.log("Original Order (after double reverse):", placesToVisit);
// Sort the array to store it in alphabetical order
placesToVisit.sort();
console.log("Alphabetical Order:", placesToVisit);
// Sort the array to store it in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Reverse Alphabetical Order:", placesToVisit);
//Problem No 19:
// Define the original guest list
const f = ["Galileo Galilei", "Albert Einstein", "Charles Darwin", "Marie Curie", "Jane Austen", "Nikola Tesla"];
// Print a message indicating the number of people you are inviting to dinner
console.log(`You are inviting ${guestList.length} people to dinner.`);
//Problem No 20:
// Create an array of famous rivers
const rivers = ["Nile", "Amazon", "Yangtze", "Mississippi", "Danube", "Volga", "Ganges", "Mekong", "Colorado"];
// Print the list of famous rivers
console.log("List of Famous Rivers:");
for (const river of rivers) {
    console.log(river);
}
//Problem No 21:
// Create an array of book objects
const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publicationYear: 1960
    },
    {
        title: "1984",
        author: "George Orwell",
        publicationYear: 1949
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        publicationYear: 1925
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        publicationYear: 1813
    }
];
// Print the list of books
console.log("List of Books:");
for (const book of books) {
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`Publication Year: ${book.publicationYear}`);
    console.log();
}
//Problem No 22:
// Create an array
const fruits = ["apple", "banana", "cherry"];
try {
    // Attempt to access an index that doesn't exist
    const fourthFruit = fruits[3];
    console.log("Fourth fruit:", fourthFruit);
}
catch (error) {
    // Handle the error
    console.error("An error occurred:", error);
}
// Continue with the program
console.log("The program continues after handling the error.");
//Problem NO 23:
// Test 1: Is 5 greater than 2? (True)
console.log("Is 5 > 2? I predict True.");
console.log(5 > 2);
// Test 2: Is 'cat' not equal to 'cat'? (False)
console.log("Is 'cat' != 'cat'? I predict False.");
console.log('cat' != 'cat');
// Test 3: Is 6 less than or equal to 7? (True)
console.log("Is 6 <= 7? I predict True.");
console.log(6 <= 7);
// Test 4: Is 20 divided by 5 equal to 4? (True)
console.log("Is 20 / 5 == 4? I predict True.");
console.log(20 / 5 == 4);
// Test 5: Is 3 less than 1? (False)
console.log("Is 3 < 1? I predict False.");
console.log(3 < 1);
// Test 6: Is 10 greater than or equal to 10? (True)
console.log("Is 10 >= 10? I predict True.");
console.log(10 >= 10);
//Problem No 24:
// Tests for equality and inequality with strings
console.log("Equality and Inequality with Strings:");
// Test 1: Is 'apple' equal to 'apple'? (True)
console.log("Is 'apple' == 'apple'? I predict True.");
console.log('apple' == 'apple');
// Test 2: Is 'house' not equal to 'house'? (False)
console.log("Is 'house' != 'house'? I predict False.");
console.log('house' != 'house');
// Tests using the lower case function
console.log("\nLowercase Tests:");
const text1 = "Hello, World!";
const text2 = "hello, world!";
// Test 3: Are the lowercase versions of text1 and text2 equal? (True)
console.log("Is lowercase(text1) == lowercase(text2)? I predict True.");
console.log(text1.toLowerCase() == text2.toLowerCase());
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("\nNumerical Tests:");
// Test 4: Is 5 greater than 3? (True)
console.log("Is 5 > 3? I predict True.");
console.log(5 > 3);
// Test 5: Is 10 less than 7? (False)
console.log("Is 10 < 7? I predict False.");
console.log(10 < 7);
// Test 6: Is 10 greater than or equal to 10? (True)
console.log("Is 10 >= 10? I predict True.");
console.log(10 >= 10);
// Test 7: Is 3 less than or equal to 2? (False)
console.log("Is 3 <= 2? I predict False.");
console.log(3 <= 2);
// Tests using "and" and "or" operators
console.log("\nLogical Operators Tests:");
const isSunny = true;
const isWarm = false;
// Test 8: Is it sunny and warm? (False)
console.log("Is it sunny and warm? I predict False.");
console.log(isSunny && isWarm);
// Test 9: Is it sunny or warm? (True)
console.log("Is it sunny or warm? I predict True.");
console.log(isSunny || isWarm);
// Test whether an item is in an array
console.log("\nArray Tests:");
const fruts = ["apple", "banana", "cherry", "grape"];
// Test 10: Is 'banana' in the fruits array? (True)
console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes('banana'));
// Test 11: Is 'watermelon' not in the fruits array? (True)
console.log("Is 'watermelon' not in the fruits array? I predict True.");
console.log(!fruits.includes('watermelon'));
//Problem No 25:
//No 1 (Passes the if test - Alien color is 'green')
let alien_color = 'green';
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
//No 2 (Fails the if test - Alien color is 'red')
const aliencolor = 'red';
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
//Problem No 26:
//No 1 (Runs the if block - Alien color is 'green')
let alien_clr = 'green';
if (alien_clr === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else {
    console.log("Congratulations! You just earned 10 points.");
}
//No 2 (Runs the else block - Alien color is 'red')
let alien_colr = 'red';
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else {
    console.log("Congratulations! You just earned 10 points for shooting a non-green alien.");
}
//Problem No 27:
//No 1 (Green Alien - 5 points)
let alien_clor = 'green';
if (alien_clor === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (alien_clor === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (alien_clor === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
else {
    console.log("Invalid alien color.");
}
//No 2 (Yellow Alien - 10 points)
let color = 'yellow';
if (color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (color === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (color === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
else {
    console.log("Invalid alien color.");
}
//No 3 (Red Alien - 15 points)
let alienClr = 'red';
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (alien_color === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (alien_color === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
else {
    console.log("Invalid alien color.");
}
//Problem No 28:
// Set the person's age
let age = 30; // Change this value to test different ages
// Determine the stage of life
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
//Problem No 29:
// Create an array of favorite fruits
let favorite_fruits = ["banana", "apple", "strawberry"];
// Check for specific fruits in the array
if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("apple")) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes("strawberry")) {
    console.log("You really like strawberries!");
}
if (favorite_fruits.includes("kiwi")) {
    console.log("You really like kiwis!");
}
else {
    console.log("Kiwis are not one of your favorite fruits.");
}
if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges!");
}
else {
    console.log("Oranges are not one of your favorite fruits.");
}
//Problem No 30:
// Create an array of usernames
let usernames = ["Qasim", "Emaan", "Ali", "Ayesha", "Mariyam"];
// Loop through the array and print greetings
for (const username of usernames) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
//Problem No 31:
// Create an array of usernames
const user_names = ["Rafiq", "Bilal", "Ali", "Javed", "Muneeb"];
// Check if the list of users is not empty
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    // Loop through the array and print greetings
    for (const username of usernames) {
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
    // Remove all usernames from the array
    usernames.length = 0;
}
// Check if the list of users is empty again and print the message
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
//Problem No 32:
// Define the current users and new users lists
let current_users = ["Eshrat", "Ali", "Ramzan", "Moaz", "Babar"];
let new_users = ["Rohan", "Sara", "Meerab", "Faiq", "Mirza"];
// Convert all current usernames to lowercase for case-insensitive comparison
const lowercase_current_users = current_users.map(username => username.toLowerCase());
// Loop through the new_users list
for (const new_username of new_users) {
    // Convert the new username to lowercase for case-insensitive comparison
    const lowercase_new_username = new_username.toLowerCase();
    // Check if the lowercase new username exists in the lowercase current usernames
    if (lowercase_current_users.includes(lowercase_new_username)) {
        console.log(`Sorry, the username '${new_username}' is not available. Please choose a different username.`);
    }
    else {
        console.log(`Congratulations! The username '${new_username}' is available.`);
    }
}
//Problem No 33:
// Store numbers 1 through 9 in an array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array
for (const number of numbers) {
    // Use an if-else chain to print the proper ordinal ending
    if (number === 1) {
        console.log(`${number}st`);
    }
    else if (number === 2) {
        console.log(`${number}nd`);
    }
    else if (number === 3) {
        console.log(`${number}rd`);
    }
    else {
        console.log(`${number}th`);
    }
}
//Problem No 34:
// Store your favorite pizza names in an array
let favoritePizzas = ["Pepperoni", "Margherita", "Supreme"];
// Use a for loop to print the name of each pizza
console.log("My favorite pizzas:");
for (const pizza of favoritePizzas) {
    // Print a sentence using the name of the pizza
    console.log(`I like ${pizza} pizza.`);
}
// Add a line at the end to express your love for pizza
console.log("I really love pizza!");
//Problem No 35:
// Store the names of three animals with a common characteristic in an array
const animals = ["Dog", "Cat", "Rabbit"];
// Use a for loop to print statements about each animal
console.log("Animals with a common characteristic:");
for (const animal of animals) {
    // Print a statement about each animal
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}
// Add a line at the end to mention what these animals have in common
console.log("Any of these animals would make a great pet!");
//Problem No 36:
function make_shirt(size, message) {
    console.log(`You have ordered a ${size}-sized shirt with the following message: "${message}".`);
}
// Call the function with a size and message
make_shirt("Large", "I love Imran Khan!");
//Problem No 37:
function makeshirt(size = "Large", message = "I love TypeScript") {
    console.log(`You have ordered a ${size}-sized shirt with the following message: "${message}".`);
}
// Create a large shirt with the default message
makeshirt();
// Create a medium shirt with the default message
makeshirt("Medium");
// Create a custom-sized shirt with a different message
make_shirt("Small", "JavaScript is fun!");
//Problem No 38:
function describe_city(city, country = "Unknown") {
    console.log(`${city} is in ${country}.`);
}
// Call the function for three different cities
describe_city("Karachi", "Pakistan");
describe_city("New York"); // Default country is "Unknown"
describe_city("London", "United Kingdom");
//Problem No 39:
function city_country(city, country) {
    return `${city}, ${country}`;
}
// Call the function with three city-country pairs and print the results
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("New York", "USA"));
console.log(city_country("Paris", "France"));
//Problem No 40:
// Define the make_album function
function make_album(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
    }
    return album;
}
// Create three dictionaries representing different albums
const album1 = make_album("Artist1", "Album Title 1");
const album2 = make_album("Artist2", "Album Title 2", 12); // Includes the number of tracks
const album3 = make_album("Artist3", "Album Title 3");
// Print each album's information
console.log(album1);
console.log(album2);
console.log(album3);
//Problem No 41:
// Define the array of magician's names
let magicians = ["David ", " Houdini", " Jillette", "Tailor"];
// Define the show_magicians function
function show_magicians(names) {
    for (const name of names) {
        console.log(name);
    }
}
// Call the show_magicians function with the array of magician's names
show_magicians(magicians);
//Problem No 42:
// Define the array of magician's names
let magcians = ["Copperfield", "Harry", "Penn", "Teller"];
// Define the show_magicians function
function showmagicians(names) {
    for (const name of names) {
        console.log(name);
    }
}
// Define the make_great function to modify the array
function make_great(names) {
    const greatMagicians = [];
    for (const name of names) {
        greatMagicians.push(`${name} the Great`);
    }
    return greatMagicians;
}
// Call the make_great function to modify the array
const greatMagicians = make_great(magicians);
// Call show_magicians to display the modified list
console.log("Original Magicians:");
show_magicians(magicians);
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
//Problem No 43:
// Define the array of magician's names
const bestmagicians = [" Copperfield", " Houdini", " Jillette", "Teller"];
// Define the show_magicians function
function greatmagicians(names) {
    for (const name of names) {
        console.log(name);
    }
}
// Define the make_great function to modify a copy of the array
function makegreat(names) {
    const greatMagicians = [];
    for (const name of names) {
        greatMagicians.push(`${name} the Great`);
    }
    return greatMagicians;
}
// Make a copy of the array and call make_great with the copy
let magiciansCopy = [...magicians];
let gretMagicians = make_great(magiciansCopy);
// Call show_magicians to display the original names
console.log("Original Magicians:");
show_magicians(magicians);
// Call show_magicians to display the modified "Great" names
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
//Problem No 44:
function order_sandwich(...items) {
    console.log("You ordered a sandwich with the following items:");
    for (const item of items) {
        console.log(`- ${item}`);
    }
    console.log("Enjoy your sandwich!\n");
}
// Call the function with different numbers of arguments
order_sandwich("Ham", "Cheese", "Lettuce");
order_sandwich("Turkey", "Swiss Cheese");
order_sandwich("Peanut Butter", "Jelly", "Banana");
//Problem No 45:
function createCar(manufacturer, model, ...extras) {
    const carInfo = {
        manufacturer,
        model,
        extras,
    };
    return carInfo;
}
// Call the function with required information and two other name-value pairs
const car = createCar("Toyota", "Camry", { color: "Blue" }, { features: ["GPS", "Leather Seats"] });
// Print the Object that's returned
console.log(car);
