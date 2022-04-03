var main = function (input) {
  console.log("Eric testing the console");
  console.log("another one");

  // Run- Time error
  // var myOutputValue = "hello world"();

  var myOutputValue = "Hello Everyone Welcome to Section 7 😎";
  console.log("my outputvalue = ", myOutputValue);

  return myOutputValue;
};

var jobApplication = function (jobTitle, companyName) {
  var message = `To whom it may concern, I would like to submit my application for ${jobTitle} at ${companyName}.`;
  return message;
};

var a = "Hello";

// nothing to do with the naming
var jobApplicationTwo = function (a, b) {
  var message = `To whom it may concern, I would like to submit my application for ${a} at ${b}.`;
  return message;
};
