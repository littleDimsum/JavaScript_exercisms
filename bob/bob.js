//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  var response = 'Whatever.';
  var hasLetters = /[a-z]/i.test(input);
  var hasNums =  /^\d+$/.test(input);
  if (input[input.length - 1] === '?') response = "Sure.";
  if ((input.toUpperCase() === input) && hasLetters) response = 'Whoa, chill out!';
  if (input.trim() === '') response = 'Fine. Be that way!';
  return response;
};

module.exports = Bob;

// Edge cases that need to be handled --> Essentially  only numbers, or only spaces included here, three tests currently failing
