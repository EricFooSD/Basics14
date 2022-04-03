var followAlongMain = function (input) {
  // Attempt the Follow Along exercise from the Loops module below with followAlongMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var simpleLoopMain = function (input) {
  // Attempt the Simple Loop with Variations exercise from the Loops module below with simpleLoopMain as the main function.
  var myOutputValue = "";
  var counter = 0;

  while (counter < 6) {
    console.log("counter before = ", counter);
    myOutputValue = myOutputValue + " hello";
    console.log("myOutputValue = ", myOutputValue);
    counter = counter + 1;
    console.log("counter after = ", counter);
  }
  return myOutputValue;
};

var loopWithinLoopMain = function (input) {
  var myOutputValue = "";

  // Initialise the outer counter, rowCounter
  var rowCounter = 0;
  while (rowCounter < input) {
    var columnCounter = 0;

    // Initialise the inner counter, columnCounter
    while (columnCounter < input) {
      myOutputValue = myOutputValue + "Hello ";
      columnCounter = columnCounter + 1;
    }
    // add a line break after each inner counter is done.
    myOutputValue = myOutputValue + "<br>";
    rowCounter = rowCounter + 1;
  }

  // After the outer loop has run to completion, return the output compiled
  // by the above loops.
  return myOutputValue;
};

// ERIC using this to demostrate FOR loops
var infiniteLoopMain = function (input) {
  var myOutputValue = "Eric testing FOR loop: <br>";
  for (let counter = 0; counter < 6; counter += 1) {
    myOutputValue += " Testing";
  }
  return myOutputValue;
};
