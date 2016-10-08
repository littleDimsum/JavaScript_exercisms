function BeerSong(){}

BeerSong.prototype.verse = function (num) {
  if (num > 1 ){
    return `${num} bottles of beer on the wall, ${num} bottles of beer.\nTake one down and pass it around, ${num -1} bottles of beer on the wall.\n`
  } else if (num === 0){
    return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n'
  } else {
    return `1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n`
  }
};

BeerSong.prototype.sing = function (startNum, lastNum) {
  var result = [];
  var end = lastNum ? lastNum : 0
  for(var i = startNum; i >= end; i--){
    result.push(this.verse(i));
  }
  
  return result.join('\n');
};

module.exports = BeerSong;
