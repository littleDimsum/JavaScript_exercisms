function Words(){}

Words.prototype.count = function (input) {
  var words = processInput(input);
  var uniqueWords = words.unique();
  var output = {};
  for(var i = 0; i < uniqueWords.length; i++){
    output[uniqueWords[i]] = elementCount(uniqueWords[i], words);
  }
  return output;
};

Array.prototype.unique = function (){
  var uniqueValues = [];
  for(var i = 0; i < this.length; i++){
    if (uniqueValues.indexOf(this[i]) == -1) uniqueValues.push(this[i]);
  }
  return uniqueValues
};

function elementCount(element, array) {
  var indices = [];
  var index = array.indexOf(element);
  while (index != -1) {
    indices.push(index);
    index = array.indexOf(element, index + 1);
  }
  return indices.length;
}

function processInput(input){
  return input.toLowerCase().trim().replace("\n", " ").replace("\t", " ").split(/\s+/);
}

module.exports = Words;
