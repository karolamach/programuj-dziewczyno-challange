//Function Declarations
function getReminder(){
    console.log("Water the plants")
  }
  
  function greetInSpanish(){
    console.log("Buenas Tardes")
  }


//   calling the function

function sayThanks(){
    console.log ('Thank you for your purchase! We appreciate your business')
  };
  
  sayThanks();
  sayThanks();
  sayThanks();


  //Parameters and Arguments

  function sayThanks(name) {
    console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
  }
  
  sayThanks('Cole');


//Default Parameters
function makeShoppingList(item1 = "milk", item2 = "bread", item3 = "eggs"){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }

  //return
  function monitorCount(rows, columns) {
    return rows * columns;
  }
  
  const numOfMonitors = monitorCount(5, 4);
  
  console.log(numOfMonitors);


  //Helper Functions

  function monitorCount(rows, columns) {
    return rows * columns;
  }
  
  function costOfMonitors(rows, columns){
    return monitorCount(rows, columns)*200
    
  }
  const totalCost = costOfMonitors(5,4)
  console.log(totalCost);


  //function expression
  const plantNeedsWater = function(day){
    if (day === "Wednesday"){
      return true;
    }else{
      return false;
    }
  }
  plantNeedsWater("Tuesday")
  console.log(plantNeedsWater("Tuesday"))

  //arrow function
  const plantsNeedWater = (day) => {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  };

  //Concise Body Arrow Functions

  const plantNeedWater = day => day === 'Wednesday' ? true : false;
