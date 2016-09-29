function Year(year) {
  this.year = year;
}

Year.prototype.isLeap = function () {
  var byFour = this.year % 4 === 0;
  var byOneHundred = this.year % 100 === 0;
  var byFourHundred = this.year % 400 === 0;
  return byFour && !byOneHundred || byFour && byFourHundred;
};

module.exports = Year;
