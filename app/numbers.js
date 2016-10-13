exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var ret = num.toString(2);
    return ret.charAt(ret.length - bit)|0;
  },

  base10: function(str) {
    return Number.parseInt(str, 2);
  },

  convertToBinary: function(num) {
    return ("00000000" + num.toString(2)).substr(-8);
  },

  multiply: function(a, b) {
    return Number((a*b).toFixed(10));
  }
};
