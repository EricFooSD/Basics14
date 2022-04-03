// ......................................................
// .......... DEFAULT TEMPLATE ..........
// ......................................................

var main = function (input) {
  var myOutputValue = "hello world";
  return myOutputValue;
};
// ......................................................
// .......... GREETING PROGRAM ..........
// ......................................................

var greetingMain = function (input) {
  var myOutputValue = "hello " + input + ", looking good!";

  // var myOutputValue = `Hello ${input}, looking good! =)`;

  return myOutputValue;
};

// ......................................................
// .......... METRIC CONVERSION PROGRAM ..........
// ......................................................

var metricMain = function (input) {
  // Attempt the Metric Conversion Program exercise from the Our First Program module below with metricMain as the main function.

  // define input as distance in km
  var distanceInKm = input;

  // define formula to convert km to miles
  var distanceInMiles = distanceInKm * 0.62;

  // define output as the distance in miles
  var myOutputValue = distanceInMiles;

  return myOutputValue;
};

// ......................................................
// .......... BASE: RUN EXAMPLE CODE ..........
// ......................................................

// convert km to miles helper function
var convertKmToMiles = function (distanceInKm) {
  var distanceInMiles = distanceInKm * 0.62;
  return distanceInMiles;
};

var functionsExampleMain = function (input) {
  // Attempt the Base: Run Example Code exercise from the Functions I module below with functionsExampleMain as the main function.
  var myOutputValue = convertKmToMiles(input);
  return myOutputValue;
};

// ......................................................
// .......... COMFORTABLE: TRAIN SPEED ..........
// ......................................................

// find a way to change mins to hours

// calculate how long it take train 1 to reach tokyo

//  helper functions
var convertMinsToHrs = function (mins) {
  return mins / 60;
};

var calcTrainTwoSpeed = function (delayInMins) {
  var trainSpeed = 200;
  var timeToTokyo = 2;
  var distanceToTokyo = trainSpeed * timeToTokyo;
  var remainingTimeForTravel = timeToTokyo - convertMinsToHrs(delayInMins);
  var trainTwoNewSpeed = distanceToTokyo / remainingTimeForTravel;
  return trainTwoNewSpeed.toFixed(2);
};

var trainSpeedMain = function (input) {
  var delayInMins = input;
  var trainTwoNewSpeed = calcTrainTwoSpeed(delayInMins);
  var myOutputValue = `Given a ${input}min delay, train 2 needs to travel at a speed of ${trainTwoNewSpeed} km/h in order to arrive at the same time as train 1`;
  return myOutputValue;
};

// ......................................................
// .......... MORE COMFORTABLE: CLOCK ..........
// ......................................................

var clockMain = function (input) {
  // Attempt the More Comfortable: Clock exercise from the Functions I module below with clockMain as the main function.

  // get number of hours and minutes from input
  var minsPerHour = 60;
  var numHours = 1 + input / minsPerHour;
  var numMins = input % minsPerHour;

  // angle of hour hand (from 12)
  var numberOfHours = 12;
  var oneRoundAngle = 360;
  var anglePerHour = oneRoundAngle / numberOfHours;
  var hourAngle = anglePerHour * numHours;

  // angle of minute hand (from 12)
  var anglePerMinute = oneRoundAngle / minsPerHour;
  var minuteAngle = anglePerMinute * numMins;

  var angleHourAndMin = Math.abs(hourAngle - minuteAngle);
  return angleHourAndMin;
};
