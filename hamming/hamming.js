function Hamming(){}

Hamming.prototype.compute = function (sequence1, sequence2) {
  if (sequence1.length !== sequence2.length) throw 'DNA strands must be of equal length.';
  var hammingDistance = 0;
  for(var i = 0; i < sequence1.length; i++){
    if (sequence1[i] !== sequence2[i]) hammingDistance++;
  }
  return hammingDistance;
};

module.exports = Hamming;
