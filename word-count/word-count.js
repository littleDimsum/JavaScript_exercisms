function Words(){}

Words.prototype.count = function (input) {
  var words = processInput(input);
  var uniqueWords = words.unique();
  var outputWords = {};
  for(var i = 0; i < uniqueWords.length; i++){
    var count = elementCount(uniqueWords[i], words)
    outputWords[uniqueWords[i]] = count;
  }

  return outputWords;
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
  var words = input.trim().split(/\s+/);
  words = words.map(function(word) {return word.split("\n")});
  var merged = [].concat.apply([], words);
  words = merged.map(function(word) {return word.split("\t")});
  var merged = [].concat.apply([], words);
  words = merged.map(function(word) {return word.toLowerCase()})
  return words;
}

module.exports = Words;
