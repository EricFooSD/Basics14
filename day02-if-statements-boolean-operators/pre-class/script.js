// ......................................................
// .......... ORANGE JUICE ..........
// ......................................................

var orangeJuiceMain = function (input) {
  // Attempt the Orange Juice Calculator exercise from the Functions II module below with orangeJuiceMain as the main function.
  var orangesPerGlass = 4;
  var glassesPerGuest = 2;
  var numGlasses = input * glassesPerGuest;
  var numOranges = numGlasses * orangesPerGlass;
  var myOutputValue = `${numOranges} oranges are needed`;
  return myOutputValue;
};

/**
 * Orange Juice Calculator (Functions II)
 * Function edited to accept 2 parameters
 * Do not worry about our input field not accepting more than 1 parameter for now
 */

var orangeJuiceAdvanced = function (numGuest, glassesPerGuest) {
  // Attempt the Orange Juice Calculator exercise from the Functions II module below with orangeJuiceMain as the main function.
  var orangesPerGlass = 4;
  var numGlasses = numGuest * glassesPerGuest;
  var numOranges = numGlasses * orangesPerGlass;
  var myOutputValue = `${numOranges} oranges are needed`;
  return myOutputValue;
};

// ......................................................
// .......... HOUSE PAINT ...............................
// ......................................................

var paintMain = function (input) {
  // Attempt the House Paint exercise from the Functions II module below with paintMain as the main function.
  var numRooms = 6;
  var areaPerRoom = 3 * 3;
  var numCoatsPerArea = 2;
  var areaToPaint = areaPerRoom * numRooms * numCoatsPerArea;

  var areaPerLitre = 300;
  var litreUsed = areaToPaint / areaPerLitre;
  var cost = litreUsed * pricePerLitre;

  var myOutputValue = `Paint cost: $${cost}`;
  return myOutputValue;
};

/**
 * House Paint (Functions II)
 * Function edited to accept 3 parameters
 * Do not worry about our input field not accepting more than 1 parameter for now
 */

var paintMainAdvanced = function (pricePerLitre, numRooms, numCoatsPerArea) {
  // Attempt the House Paint exercise from the Functions II module below with paintMain as the main function.

  var areaPerRoom = 3 * 3;
  var areaToPaint = areaPerRoom * numRooms * numCoatsPerArea;

  var areaPerLitre = 300;
  var litreUsed = areaToPaint / areaPerLitre;
  var cost = litreUsed * pricePerLitre;

  var myOutputValue = `Paint cost: $${cost}`;
  return myOutputValue;
};

// ......................................................
// .......... RANDOM DICE ROLL ...............................
// ......................................................

var rollDice = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;
  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

var randomDiceMain = function (input) {
  // Generate a random dice number
  var randomDiceNumber = rollDice();

  // Personalise the output
  var myOutputValue = "You just rolled a " + randomDiceNumber + "!";

  // Return and print output.
  return myOutputValue;
};

// ......................................................
// .......... SECRET PHRASE ...............................
// ......................................................

// var secretPhraseMain = function (input) {
//   // Set a default value for myOutputValue
//   var myOutputValue = "hello world";
//   // If input is our secret phrase, change the value of myOutputValue

//   if (input == "palatable papaya") {

//     console.log("testing that my if conditions is true");

//     myOutputValue = "you wrote the secret phrase!";
//   }

//   // return myOutputValue as output
//   return myOutputValue;
// };

// *************** ELSE **************

// var secretPhraseMain = function (input) {
//   // Set a default value for myOutputValue
//   var myOutputValue = "hello world";
//   // If input is our secret phrase, change the value of myOutputValue
//   if (input == "palatable papaya") {
//     console.log("my if condition is true");
//     myOutputValue = "you wrote the secret phrase!";
//   } else {
//     console.log("my if condition is NOT true");
//     myOutputValue = "the door shall not open!";
//   }

//   // return myOutputValue as output
//   return myOutputValue;
// };

// ************** ELSE IF ***************

var secretPhraseMain = function (input) {
  // Set a default value for myOutputValue
  var myOutputValue = "the door shall not open.";
  // If input is our secret phrase, change the value of myOutputValue
  if (input == "palatable papaya") {
    console.log("first condition is true");
    myOutputValue = "you wrote the secret phrase!";
    //
  }
  if (input == "not so palatable papaya") {
    console.log("second condition is true");
    myOutputValue += " but you are nearly there.";
  } else {
    console.log("third condition is true");
    myOutputValue += " nope, this is far from the right phrase.";
  }
  // return myOutputValue as output
  return myOutputValue;
};

// ......................................................
// .......... DICE GAME ...............................
// ......................................................
var rollDice = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

var diceGameMain = function (input) {
  // Generate a random dice number
  var randomDiceNumber = rollDice();
  // var randomDiceNumber = 2;
  console.log("my random dice roll is ", randomDiceNumber);
  // Default output value is 'you lose'.
  var myOutputValue = "you lose";
  // If input matches randomDiceNumber, update output.
  if (input === randomDiceNumber || input == "3") {
    myOutputValue = "you win";
  }
  // Return output.
  return myOutputValue;
};

// ......................................................
// .......... TWICE THE GUESS ...............................
// ......................................................

var twiceGuessMain = function (input) {
  // Generate a random dice roll
  var randomDiceNumber = rollDice();
  console.log("my randome dice roll is ", randomDiceNumber);
  // Default output value is 'you lose'.
  var myOutputValue = "you lose";

  // define win condition
  if (input * 2 === randomDiceNumber) {
    myOutputValue = "you win";
  } else if (input > 3) {
    myOutputValue += ", you should probably guess something smaller";
  }

  return myOutputValue;
};
