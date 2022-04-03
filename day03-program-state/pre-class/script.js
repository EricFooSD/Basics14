var global = "this is a global variable";

var ericScopeExample = function (input) {
  // Attempt the Follow Along exercise from the Intro to Scope module below with introScopeMain as the main function.

  var functionVariable = "this is a function variable";

  if (input == "testing") {
    var blockVariable = "this is a block variable";
  }

  var myOutputValue = "hello world";
  return myOutputValue;
};

// ......................................................
// .......... FOLLOW ALONG INTRO TO SCOPE ...............
// ......................................................

// global scope
var globalVariable = 0;

// also global scope
var introScopeMain = function (input) {
  // function scope
  console.log(`globalVariable has a value of ${globalVariable}`);
  // we can manipulate the value of a global varaible
  // without having to re-declare using the var keyword:

  globalVariable += 1;
  console.log(`globalVariable now has a value of ${globalVariable}`);
  var myOutputValue;
  if (globalVariable % 2 == 0) {
    // block scope
    // we can access both myOutputValue and globalVariable within block scope
    myOutputValue = `Global variable is even, with a value of ${globalVariable}`;
  } else {
    myOutputValue = `Global variable is odd, with a value of ${globalVariable}`;
  }
  return myOutputValue;
};

// ......................................................
// ...................... BASE: APP SETUP ...............
// ......................................................

var rollDice = function () {
  // produces a decimal between 0 and 6
  var randomDecimal = Math.random() * 6;
  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);
  // it's a number from 0 - 5 ... add 1
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

var bankRoll = 10;

var appSetupMain = function (input) {
  // Attempt the Base: App Setup exercise from the Program Lifecycle and State module below with appSetupMain as the main function.
  var randomDiceNumber = rollDice();

  console.log("random dice number = ", randomDiceNumber);

  var myOutputValue = "you lose. current bank roll: " + bankRoll;

  if (condition) {
    // what to do if condition is true
  }

  // change bankRoll state if the dice matches the randomDice
  if (randomDiceNumber == input) {
    bankRoll = bankRoll + 1;
    myOutputValue = "you win. current bank roll: " + bankRoll;
  }

  console.log("bank roll =", bankRoll);

  return myOutputValue;
};

// ......................................................
// ...................... BASE: LAST ROLL ...............
// ......................................................

var previousRoll = 0;

var lastRollMain = function (input) {
  // Attempt the Base: App Setup exercise from the Program Lifecycle and State module below with appSetupMain as the main function.
  var randomDiceNumber = rollDice();
  console.log("random dice number = ", randomDiceNumber);
  console.log("previous roll = ", previousRoll);

  var myOutputValue = "";

  if (previousRoll == 0) {
    myOutputValue += `This is your first roll.`;
  } else {
    myOutputValue += `Your last roll was ${previousRoll}. `;
  }

  if (randomDiceNumber == input) {
    myOutputValue += `You just rolled a ${randomDiceNumber}. You guessed ${input}. You win!`;
  } else {
    myOutputValue += `You just rolled a ${randomDiceNumber}. You guessed ${input}. You Lose 🥲`;
  }

  previousRoll = randomDiceNumber;

  return myOutputValue;
};

// ......................................................
// ...................... BASE: LOSS / WIN ...............
// ......................................................

var gamesPlayed = 0;
var gamesWon = 0;

var winpercent = gamesWon / gamesPlayed;

var winPercentage = function () {
  return Math.floor((gamesWon / gamesPlayed) * 100);
};

var winLossMain = function (input) {
  // Attempt the Base: App Setup exercise from the Program Lifecycle and State module below with appSetupMain as the main function.
  var randomDiceNumber = rollDice();
  console.log("random dice number = ", randomDiceNumber);

  var myOutputValue = "";

  if (randomDiceNumber == input) {
    gamesPlayed += 1;
    gamesWon += 1;
    myOutputValue += `You win ${winPercentage()}% of the time. You just rolled a ${randomDiceNumber}. You guessed ${input}. You win!`;
  } else {
    gamesPlayed += 1;
    myOutputValue += `You win ${winPercentage()}% of the time. You just rolled a ${randomDiceNumber}. You guessed ${input}. You Lose 🥲`;
  }

  previousRoll = randomDiceNumber;

  return myOutputValue;
};

// ......................................................
// ........... MORE COMFORTABLE: GUESSING ...............
// ......................................................

var points = 0;

var numberOfPointsMessage = function () {
  if (points == 1) {
    return `You have ${points} point.`;
  } else {
    return `You have ${points} points`;
  }
};

var guessingMain = function (input) {
  var randomDiceNumber = rollDice();
  console.log("random dice number = ", randomDiceNumber);

  var myOutputValue = "";

  if (randomDiceNumber == input) {
    points += 2;
    myOutputValue += `You just rolled a ${randomDiceNumber}. You guessed ${input}. You win! ${numberOfPointsMessage()}`;
  } else if (randomDiceNumber == input - 1 || randomDiceNumber == input + 1) {
    points += 1;
    myOutputValue += `You just rolled a ${randomDiceNumber}. You guessed ${input}. You were off by 1! ${numberOfPointsMessage()}`;
  } else {
    myOutputValue += `You just rolled a ${randomDiceNumber}. You guessed ${input}. You lose 🥲. ${numberOfPointsMessage()}`;
  }

  previousRoll = randomDiceNumber;

  return myOutputValue;
};

// ......................................................
// ........... MORE COMFORTABLE: ADVANCED GUESS .........
// ......................................................

var advancedGuessingMain = function (input) {
  // Attempt the More Comfortable: Advanced Guessing exercise from the Program Lifecycle and State module below with advancedGuessingMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

// ......................................................
// ........... MORE COMFORTABLE: MOST ROLLED ............
// ......................................................

var mostRolledMain = function (input) {
  // Attempt the More Comfortable: Most Rolled exercise from the Program Lifecycle and State module below with mostRolledMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

// ......................................................
// ..................... PROGRAM STATE .................
// ......................................................

// we set the initial state of mode
var mode = "green";

var followAlongMain = function (input) {
  if (input == "greenmode") {
    mode = "green";
  } else if (input == "bluemode") {
    mode = "blue";
  }

  var myOutputValue =
    "A fool sees not the same tree that a wise man sees. -William Blake";

  // reassign the value of myOutputValue is mode is at state 'blue'
  if (mode == "blue") {
    myOutputValue =
      "The sea, once it casts its spell, holds one in its net of wonder forever. -Jacques Cousteau";
  }

  return myOutputValue;
};

// ......................................................
// ..................... PROGRAM STATE: RED .................
// ......................................................

// var redModeMain = function (input) {
//   if (input == "greenmode") {
//     mode = "green";
//   } else if (input == "bluemode") {
//     mode = "blue";
//   } else if (input == "redmode") {
//     mode = "red";
//   }

//   var myOutputValue =
//     "A fool sees not the same tree that a wise man sees. -William Blake";

//   // reassign the value of myOutputValue is mode is at state 'blue'
//   if (mode == "blue") {
//     myOutputValue =
//       "The sea, once it casts its spell, holds one in its net of wonder forever. -Jacques Cousteau";
//   }

//   if (mode == "red") {
//     myOutputValue = "The one that codes, is the one that sees. - Eric Foo";
//   }

//   return myOutputValue;
// };

// ......................................................
// ..................... REFACTORING ....................
// ......................................................

// Set game modes
var WAITING_USERNAME = "Waiting for user name";
var PLAYING_DICEGAME = "Playing the dice game";

// Set the initial game states
var currentGameMode = WAITING_USERNAME;
var bankRoll = 10;
var userName = "";

// Get a randomised dice roll
var rollDice = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

/**
  For a program with only one input field, the program must be 'smart'
  enough to understand the context of the inputs based on the prevailing
  game states.
**/
var redModeMain = function (input) {
  var myOutputValue = "";

  if (currentGameMode == WAITING_U) {
    // set the name
    userName = input;

    // now that we have the name, switch the mode

    myOutputValue = "Hello " + userName;

    console.log("current username =", userName);

    currentGameMode = PLAYING_DICEGAME;
  } else if (currentGameMode == PLAYING_DICEGAME) {
    // dice game logic
    var randomDiceRoll = rollDice();
    var userGuess = input; // <<<<<<<<<<<<<<<<
    // default output as losing scenario
    myOutputValue =
      userName +
      " you lost! you guessed: " +
      input +
      "you rolled: " +
      randomDiceRoll +
      " current bank roll: " +
      bankRoll;

    if (userGuess == randomDiceRoll) {
      bankRoll = bankRoll + 1;
      myOutputValue =
        userName +
        " you won! you guessed: " +
        input +
        "you rolled: " +
        randomDiceRoll +
        " your current bank roll: " +
        bankRoll;
    }
  }

  return myOutputValue;
};

// ..................... REFACTORED CODE ....................

// var currentGameMode = "waiting for user name";
// var bankRoll = 10;
// var userName = "";

// var rollDice = function () {
//   var randomDecimal = Math.random() * 6;
//   var randomInteger = Math.floor(randomDecimal);
//   var diceNumber = randomInteger + 1;
//   return diceNumber;
// };

// var playDiceGame = function (userName, userGuess) {
//   var message = "";

//   // dice game logic
//   var randomDiceRoll = rollDice();
//   message =
//     userName +
//     " you lost! you guessed: " +
//     userGuess +
//     "you rolled: " +
//     randomDiceRoll +
//     " current bank roll: " +
//     bankRoll;

//   if (userGuess == randomDiceRoll) {
//     bankRoll = bankRoll + 1;
//     message =
//       userName +
//       " you won! you guessed: " +
//       userGuess +
//       "you rolled: " +
//       randomDiceRoll +
//       " your current bank roll: " +
//       bankRoll;
//   }

//   return message;
// };

// var main = function (input) {
//   var myOutputValue = "";

//   if (currentGameMode == "waiting for user name") {
//     // set the name
//     userName = input;

//     // now that we have the name, switch the mode
//     currentGameMode = "dice game";

//     myOutputValue = "Hello " + userName;
//   } else if (currentGameMode == "dice game") {
//     // refactored function that can be reused anywhere
//     myOutputValue = playDiceGame(userName, input);
//   }

//   return myOutputValue;
// };
