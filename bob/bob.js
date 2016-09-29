//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  var response = 'Whatever.';
  if (input[input.length - 1] === '?') response = "Sure.";
  if ((input.toUpperCase() === input) && (/[a-z]/i.test(input))) response = 'Whoa, chill out!';
  if (input.trim() === '') response = 'Fine. Be that way!';
  return response;
};

module.exports = Bob;
