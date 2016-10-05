function Isogram(word){
  this.word = word
}

Isogram.prototype.isIsogram = function () {
  var chars = allCharacters(this.word);
  var uniqueChars = chars.filter(function(item, pos, self) {
    return self.indexOf(item) == pos;
  });
  return chars.length == uniqueChars.length
};

function allCharacters(word){
  return word.replace(/ /g, '').replace(/-/g, '').toLowerCase().split('');
}

module.exports = Isogram;
