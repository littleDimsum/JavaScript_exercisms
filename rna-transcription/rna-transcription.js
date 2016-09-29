function DnaTranscriber(){}

DnaTranscriber.prototype.toRna = function (dnaStrand) {
  var rnaStrand = "";
  for(var i = 0; i < dnaStrand.length; i++){
    if (dnaStrand[i] === 'C') rnaStrand += 'G';
    if (dnaStrand[i] === 'G') rnaStrand += 'C';
    if (dnaStrand[i] === 'A') rnaStrand += 'U';
    if (dnaStrand[i] === 'T') rnaStrand += 'A';
  }
  return rnaStrand;
};

module.exports = DnaTranscriber;
