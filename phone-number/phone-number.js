function PhoneNumber(phone){
  this.phone = phone;
}

PhoneNumber.prototype.number = function () {
  var onlyNums = filterNonNums(this.phone)
  var validNum = ""
  return onlyNums
};

  
function filterNonNums(phone){
  const numbers = ["0","1","2","3","4","5","6","7","8","9"]
  var onlyNums = ""
  phone.split('').forEach(function(num){
    if (numbers.indexOf(num) !== -1){
      onlyNums += num
    }
  });
  return onlyNums
}

module.exports = PhoneNumber;
