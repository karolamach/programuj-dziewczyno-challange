//Repeating Tasks Manually (without the loop)
const vacationSpots = ["Barcelona","London","Palma de Mallorca"];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

//The For Loop

//Create a program that loops from 5 to 10 and logs each number to the console.
for (let counter = 5; counter < 11; counter++) {
    console.log(counter);
  } 


//Looping in Reverse
//loop backwards from 3 to 0
for (let counter = 3; counter >=0; counter--){
    console.log(counter);
  }


//Looping through Arrays

const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpots.length; i++ ){
  console.log('I would love to visit ' + vacationSpots[i]);
}

//Nested Loops zagniezdzone 

//petla w petli porównuje wartosci dwoch arrays i wyswietla te któe sa takie same
// porownuje wartosci dwoch tablic, takie same elementy wrzuca do nowej tablicy, poczatkowo zadeklarowanej jako pusta
let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin'];
let tinasFollowers = ['Sam', 'Marta', 'Elle'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};

console.log(mutualFollowers)


//The While 
//sprawdza czy w nowej liscie znajduje sie "spade",  wyswietla bez spade
const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard = [];

while(currentCard != "spade" ){
  currentCard = cards[Math.floor(Math.random() * 4)];
  //Math.floor(Math.random() * 4) will give us a random number from 0 to 3. Well use this number to index the cards array, and assign the value of currentCard to a random element from that array.
console.log(currentCard);
}

//Do...While Statements

let cupsOfSugarNeeded = 5; 
let cupsAdded = 0;

do{
  cupsAdded++
} while (cupsAdded < cupsOfSugarNeeded);

console.log(cupsAdded)


//The break Keyword

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
}
console.log("And if you don't know, now you know.");