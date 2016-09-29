function DnaTranscriber(){

}

DnaTranscriber.prototype.toRna = function (dnaStrand) {
  var rnaStrand = "";
  for(var i = 0; i < dnaStrand.length; i++){
    var nucleotide = dnaStrand[i];
    if (nucleotide === 'C') rnaStrand += 'G';
    if (nucleotide === 'G') rnaStrand += 'C';
    if (nucleotide === 'A') rnaStrand += 'U';
    if (nucleotide === 'T') rnaStrand += 'A';
  }
  return rnaStrand;
};

module.exports = DnaTranscriber;
