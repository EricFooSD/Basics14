var followAlongMain = function (input) {
  // Attempt the Follow Along exercise from the Loops module below with followAlongMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var simpleLoopMain = function (input) {
  // Attempt the Simple Loop with Variations exercise from the Loops module below with simpleLoopMain as the main function.
  var myOutputValue = "";

  // initialise the counter
  var counter = 0;

  while (counter < input) {
    console.log("counter before = ", counter);

    myOutputValue = myOutputValue + " hello";
    console.log("myOutputValue = ", myOutputValue);

    //increment counter
    counter = counter + 1;
    // console.log("counter after = ", counter);
  }
  return myOutputValue;
};

var loopWithinLoopMain = function (input) {
  var myOutputValue = "";

  // Initialise the outer counter, outerCounter
  var outerCounter = 0;
  while (outerCounter < input) {
    // set the inner loop counter
    var innerCounter = 0;
    // Initialise the inner counter, innerCounter
    while (innerCounter < input) {
      myOutputValue = myOutputValue + `${innerCounter}Hello `;
      innerCounter = innerCounter + 1;
    }
    // add a line break after each inner counter is done.
    myOutputValue = myOutputValue + "<br>";
    outerCounter = outerCounter + 1;
  }
  // After the outer loop has run to completion, return the output compiled
  // by the above loops.
  return myOutputValue;
};

// ERIC using this to demostrate FOR loops
var infiniteLoopMain = function (input) {
  var myOutputValue = "";
  for (let counter = 0; counter < 6; counter += 1) {
    console.log("counter = ", counter);
    myOutputValue += " Testing";
    console.log("myOutputValue =", myOutputValue);
  }
  return myOutputValue;
};

var simpleLoopMain = function (input) {
  var myOutputValue = "";
  var counter = 0;
  while (counter < 6) {
    myOutputValue = myOutputValue + " hello";
    //increment counter
    counter = counter + 1;
  }
  return myOutputValue;
};
