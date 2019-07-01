//arrays
let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

console.log(newYearsResolutions);

//Create an Array

const hobbies = ["swimming","windsurfing","reading"];

console.log(hobbies);

//Accessing Elements
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

const listItem = famousSayings[0];
console.log(listItem)
console.log(famousSayings[2]);

console.log(famousSayings[3]);

//Update Elements
let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = "avocados";

//Arrays with let and const

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';

console.log(condiments);

condiments = ['Mayo'];

utensils[3] = 'Spoon';

console.log(utensils);

// utensils = ['Spork'];


//The .length property
const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);

//The .push() Method
const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push("do your bed","walk the dog");

console.log(chores)

//The .pop() Method
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores.pop();

console.log(chores)
