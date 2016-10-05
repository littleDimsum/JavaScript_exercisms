function Pangram(sentence){
  this.sentence = sentence;
}

Pangram.prototype.isPangram = function () {
  var chars = this.sentence.replace(/[^a-zA-Z-]/g, '').split('')
  var uniqueChars = chars.filter(function(item, pos, self) {
    return self.indexOf(item) == pos;
  });

  return uniqueChars.length >= 26
};


module.exports = Pangram;
